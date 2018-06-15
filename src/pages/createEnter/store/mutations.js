export default {
    INITINFO(state, { r, type }) {
        console.log(type);
        let res = r.rows;

        state.name = res.realName;
        state.idcardnum = res.idcard;
        state.idcardpic1 = `${CTX}/auth_evaluate/slefmedia/manage/image?path=${res.idcardFrontPath}`;
        state.idcardpic2 = `${CTX}/auth_evaluate/slefmedia/manage/image?path=${res.idcardBackPath}`;
        state.idcardpic3 = `${CTX}/auth_evaluate/slefmedia/manage/image?path=${res.idcardOtherPath}`;
        state.infoid = res.infoid;
        state.userid = res.userid;
        state.userstatus = res.userStatus;

        if (type)
            state.type = type;

        console.log(state);
    },
    CHANGERESULT(state, r) {
        state.checkres = r;
    },
    DEALREASON(state, { key, vl, rs }) {
        state.checkreason = state.checkreason.filter(v => v.key != key);
        state.checkreason.push({
            key,
            vl: vl == 'right' ? true : false,
            rs
        });

        if (state.checkreason < 5)
            return;

        let result = true;

        state.reasonstr = [];
        state.checkreason.forEach((v, i) => {
            if (v.vl == false) {
                result = false;
                state.reasonstr.push(v.rs);
            }
        });

        state.checkres = result;

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
        state.infoid = '';
        state.userid = '';
        state.userstatus = '';

        state.ifconfirm = false;
        state.checkres = false;
        state.checkreason = [];
    }
}