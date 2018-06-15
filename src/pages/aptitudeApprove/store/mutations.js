export default {
    INITINFO(state, { r, type }) {
        let res = r.rows.info;

        state.name = res.realName;
        state.idcardnum = res.idcard;
        state.idcardpic1 = `${CTX}/auth_evaluate/slefmedia/manage/image?path=${res.idcardFrontPath}`;
        state.idcardpic2 = `${CTX}/auth_evaluate/slefmedia/manage/image?path=${res.idcardBackPath}`;
        state.idcardpic3 = `${CTX}/auth_evaluate/slefmedia/manage/image?path=${res.idcardOtherPath}`;

        let zzres = r.rows;

        state.id = zzres.id;
        state.userid = zzres.userid;
        state.type = zzres.type;
        state.qualityNumber = zzres.qualityNumber;
        state.company = zzres.company;
        state.department = zzres.department;
        state.aptpic = `${CTX}/auth_evaluate/slefmedia/manage/image?path=${res.qualityCertPath}`;
        state.status = zzres.status;
    },
    CHANGERESULT(state, r) {
        state.checkres = r;
    },
    DEALREASON(state, { key, vl, rs }) {
        state.checkreason[0]['key'] = key;
        state.checkreason[0]['vl'] = vl == 'right' ? true : false;
        state.checkreason[0]['rs'] = rs;

        if (state.checkreason[0]['vl']) {
            state.checkres = true;
        } else {
            state.checkres = false;
        }

        console.log(state);
    },
    SHOWHIDECONFIRM(state, r) {
        state.ifconfirm = r;
    },
    INFODESTROY(state) {
        state.name = '';
        state.idcardnum = '';
        state.idcardpic1 = '';
        state.idcardpic2 = '';
        state.idcardpic3 = '';

        state.id = '';
        state.userid = '';
        state.type = '';
        state.qualityNumber = '';
        state.company = '';
        state.department = '';
        state.aptpic = '';
        state.status = '';

        state.ifconfirm = false;
        state.checkres = false;
        state.checkreason = [{
            key: '',
            vl: '',
            rs: ''
        }];
    }
}