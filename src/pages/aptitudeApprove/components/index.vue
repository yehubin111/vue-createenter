<template>
    <div class="content">
        <div class="maininfo">
            <div class="info">
              <div class="person">
                <p class="title">运营人实名信息</p>
                <div class="line">
                    <name></name>
                    <identity-num></identity-num>
                </div>
                <div class="pic">
                    <identity-card></identity-card>
                </div>
              </div>
              <div class="aptitude">
                <aptitude></aptitude>
                <div class="button" v-if="status == 'DOING'">
                    <span @click="toSubmit">提交</span>
                </div>
              </div>
            </div>
        </div>
        <confirm></confirm>
    </div>
</template>
<script>
import Name from "./name";
import IdentityNum from "./identityNum";
import IdentityCard from "./identityCard";
import Confirm from "./confirm";
import Aptitude from "./aptitude";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Name,
    IdentityNum,
    IdentityCard,
    Confirm,
    Aptitude
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getInfo");
  },
  computed: {
    ...mapState(["checkreason", 'status'])
  },
  methods: {
    ...mapMutations(["SHOWHIDECONFIRM"]),
    toSubmit() {
      if (this.checkreason[0].vl === '') {
        alert("请全部审核完再提交");
        return;
      }

      this.SHOWHIDECONFIRM(true);
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  .maininfo {
    height: 90%;
    width: 1200px;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    .info {
      background-color: #fff;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .person {
        // height: 50%;
        flex: 1;
        flex-basis: 0;
        display: flex;
        flex-direction: column;
        .title {
          flex-basis: 60px;
          font-size: 18px;
          padding-left: 20px;
          line-height: 60px;
          font-weight: bold;
        }
        .line {
          // margin: 0 20px 0 20px;
          display: flex;
          flex-basis: 44px;
          // border-bottom: 1px solid #e7ebef;
        }
        .pic {
          flex-grow: 1;
          // margin: 0 20px 0 20px;
          display: flex;
        }
      }
      .aptitude {
        // height: 50%;
        flex: 1.5;
        flex-basis: 0;
        display: flex;
        flex-direction: column;
        .button {
          text-align: center;
          flex-basis: 34px;
          font-size: 16px;
          margin: 0 0 20px 0;
          span {
            display: inline-block;
            width: 100px;
            height: 38px;
            text-align: center;
            line-height: 38px;
            color: #fff;
            cursor: pointer;
            border-radius: 3px;
            background-color: #1da1f2;
            &:hover {
              background-color: rgb(28, 152, 229);
            }
          }
        }
      }
    }
  }
}
</style>
