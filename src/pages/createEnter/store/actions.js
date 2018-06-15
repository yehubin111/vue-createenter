// import dt from '../data/data.js'
import axios from 'axios';
import cm from '../data/common.js'

export default {
    getInfo({ state, commit }) {
        let type = cm.getSearch('type');
        let infoid = cm.getSearch('infoid');
        let userid = cm.getSearch('userid');
        let params = new URLSearchParams();
        params.append('type', type);
        params.append('infoid', infoid);
        params.append('userid', userid);

        axios.post(`${CTX}/auth_evaluate/slefmedia/manage/select`, params)
            .then(res => {
                let r = res.data;
                if (r.error == 1)
                    commit('INITINFO', { r, type });
                else
                    alert(r.message);
            })
            .catch(err => {
                console.log(err);
            })
    },
    toSubmit({ state, commit, dispatch }) {
        let params = new URLSearchParams();
        params.append('type', state.type);
        params.append('infoid', state.infoid);
        params.append('userid', state.userid);
        params.append('status', state.checkres ? 'OK' : 'FAIL');
        params.append('reason', state.reasonstr.join(','));
        params.append('sms', state.checkres ? '祝贺你，通过同顺号实名认证，成为同花顺认证创作者。' : '很遗憾，你未通过实名认证，登录创作平台查询详细理由。');

        axios.post(`${CTX}/auth_evaluate/slefmedia/manage/check/personal`, params)
            .then(res => {
                let r = res.data;
                console.log(r.error);
                if (r.error == 1)
                    dispatch('getNext');
                else
                    alert(r.message);
            })
            .catch(err => {
                console.log(err);
            })
    },
    getNext({ state, commit }) {
        let params = new URLSearchParams();
        params.append('type', state.type);

        axios.post(`${CTX}/auth_evaluate/slefmedia/manage/query`, params)
            .then(res => {
                let r = res.data;
                if (r.error == 1) {
                    commit('INFODESTROY');
                    commit('INITINFO', { r });
                } else
                    alert(r.message)
            })
            .catch(err => {
                console.log(err);
            })
    }

    // getInfo({ state, commit }) {
    //     let r = dt.info;
    //     let type = cm.getSearch('type');
    //     commit('INITINFO', { r, type });
    // }
}