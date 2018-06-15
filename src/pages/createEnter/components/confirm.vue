<template>
    <div class="confirm" v-if="ifconfirm">
        <div class="blackback"></div>
        <div class="confirmbox" v-if="result === '1'">
            <p class="top">审核结果为：<span>通过</span><br>确定提交审核结果</p>
            <p class="content">祝贺你，通过同顺号实名认证，成为同花顺认证创作者。</p>
            <p class="button">
                <span class="submit" @click="toSubmit">确定</span>
                <span class="cancel" @click="hideConfirm">取消</span>
            </p>
        </div>
        <div class="confirmbox" v-else>
            <p class="top">审核结果为：<span>不通过</span><br>确定提交审核结果</p>
            <p class="content">很遗憾，你未通过实名认证，理由如下：</p>
            <ul class="list">
                <li v-for="(f, index) in checkreason" :key="index" v-if="f.rs"><span>-.{{f.rs}}</span></li>
            </ul>
            <p class="tip">如有疑问，请致电客服：95105885</p>
            <p class="button">
                <span class="submit" @click="toSubmit">确定</span>
                <span class="cancel" @click="hideConfirm">取消</span>
            </p>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["checkres", "checkreason", "ifconfirm"]),
    result() {
      if (this.checkres) return "1";
      else return "0";
    }
  },
  methods: {
    ...mapMutations(["SHOWHIDECONFIRM"]),
    hideConfirm() {
      this.SHOWHIDECONFIRM(false);
    },
    toSubmit() {
      this.$store.dispatch("toSubmit");
    }
  }
};
</script>

<style lang="less" scoped>
.confirm {
  .blackback {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .confirmbox {
    position: fixed;
    width: 400px;
    padding: 30px 0 30px 0;
    left: 50%;
    top: 50%;
    z-index: 110;
    transform: translate(-50%, -50%);
    background-color: #fff;
    text-align: center;
    .top {
      font-size: 18px;
      text-align: center;
      margin: 0 0 5px 0;
      span {
        color: #f44446;
      }
    }
    .content {
      text-align: center;
      margin-bottom: 20px;
    }
    .list {
      text-align: center;
      list-style-type: disc;
      li {
        text-align: center;
        display: block;
        list-style-type: disc;
        span {
          text-align: left;
          width: 200px;
          display: inline-block;
          color: #f44446;
          line-height: 20px;
        }
      }
    }
    .tip {
      width: 200px;
      line-height: 40px;
      //   text-align: left;
      display: inline-block;
    }
    .button {
      text-align: center;
      span {
        width: 80px;
        line-height: 30px;
        border-radius: 3px;
        font-size: 12px;
        display: inline-block;
        cursor: pointer;
        margin: 0 7px;
        &.submit {
          color: #fff;
          background-color: #1da1f2;
          &:hover {
            background-color: rgb(28, 152, 229);
          }
        }
        &.cancel {
          background-color: #eee;
        }
      }
    }
  }
}
</style>
