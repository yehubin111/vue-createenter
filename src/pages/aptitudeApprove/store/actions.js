// import dt from '../data/data.js'
import axios from 'axios';
import cm from '../data/common.js'

export default {
    getInfo({ state, commit }) {
        let id = cm.getSearch('id');
        let userid = cm.getSearch('userid');
        let params = new URLSearchParams();
        params.append('id', id);
        params.append('userid', userid);

        axios.post(`${CTX}/auth_evaluate/slefmedia/manage/qualify/select`, params)
            .then(res => {
                let r = res.data;
                if (r.error == 1)
                    commit('INITINFO', { r });
                else
                    alert(r.message);
            })
            .catch(err => {
                console.log(err);
            })
    },
    toSubmit({ state, commit, dispatch }) {
        let params = new URLSearchParams();
        params.append('id', state.id);
        params.append('userid', state.userid);
        params.append('status', state.checkres ? 'OK' : 'FAIL');
        params.append('reason', state.checkreason[0].rs);
        params.append('sms', state.checkres ? `祝贺你，通过${state.type}资质认证审核。` : '很遗憾，你未通过资质认证，登录创作平台查询详细理由。');

        axios.post(`${CTX}/auth_evaluate/slefmedia/manage/check/qualify`, params)
            .then(res => {
                let r = res.data;
                if (r.error == '1')
                    dispatch('getNext');
                else
                    alert(r.message);
            })
            .catch(err => {
                console.log(err);
            })
    },
    getNext({ state, commit }) {
        axios.get(`${CTX}/auth_evaluate/slefmedia/manage/qualify/query`)
            .then(res => {
                let r = res.data;
                if (r.error == '1') {
                    commit('INFODESTROY');
                    commit('INITINFO', { r });
                } else
                    alert(r.message);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // getInfo({ state, commit }) {
    //     let r = dt.info;
    //     commit('INITINFO', { r });
    // }
}