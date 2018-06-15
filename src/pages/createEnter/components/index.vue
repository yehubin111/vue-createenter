<template>
    <div class="content">
        <div class="maininfo">
            <p class="title">
                实名认证审核
            </p>
            <div class="info">
                <div class="line">
                    <name></name>
                    <identity-num></identity-num>
                </div>
                <div class="pic">
                    <identity-card></identity-card>
                </div>
                <div class="button" v-if="userstatus == 'DOING'">
                    <span @click="toSubmit">提交</span>
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
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Name,
    IdentityNum,
    IdentityCard,
    Confirm
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getInfo");
  },
  computed: {
    ...mapState(["checkreason", 'userstatus'])
  },
  methods: {
    ...mapMutations(["SHOWHIDECONFIRM"]),
    toSubmit() {
      if (this.checkreason.length < 5) {
        alert("请全部审核完再提交");
        return;
      }

      this.SHOWHIDECONFIRM(true);
      //   this.$store.dispatch('toSubmit');
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
    .title {
      line-height: 24px;
      flex-basis: 24px;
      font-size: 22px;
      margin: 0 0 10px 0;
      text-align: center;
      color: #333;
    }
    .info {
      background-color: #fff;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .line {
        margin: 20px;
        display: flex;
        flex-basis: 60px;
      }
      .pic {
        flex-grow: 1;
        margin: 0 20px 20px 20px;
        display: flex;
      }
    }
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
</style>
