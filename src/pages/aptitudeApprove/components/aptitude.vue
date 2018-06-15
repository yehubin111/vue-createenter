<template>
    <div class="apt">
        <p class="title">资质认证</p>
        <div class="info">
            <div class="list">
                <p>资质类型：{{type}}</p>
                <p>证书编号：{{qualityNumber}}</p>
                <p>所在券商：{{company}}</p>
                <p>所在营业部：{{department}}</p>
            </div>
            <div class="pic">
                <p class="name">证书照片
                    <select-option :choice="choice" :result="result" :reason="reason"></select-option>
                </p>
                <div class="page">
                    <img :src="aptpic" alt="">
                </div>
            </div>
        </div>
        <p class="reason" v-if="result === '0'">{{res}}</p>
    </div>
</template>

<script>
import SelectOption from "./select";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      reason: ["手持照片不清晰", "认证信息与证件照不符", "其他"],
      res: ""
    };
  },
  components: {
    SelectOption
  },
  computed: {
    ...mapState([
      "aptpic",
      "checkreason",
      "type",
      "qualityNumber",
      "company",
      "department"
    ]),
    result() {
      let st = this.checkreason.filter(v => v.key == "apt");
      if (!st[0]) return "";
      return st[0].vl == true ? "1" : "0";
    }
  },
  methods: {
    ...mapMutations(["DEALREASON"]),
    choice(res, r) {
      let key = "apt";
      let vl = res;
      let rs = "";
      if (res == "right") {
        // this.result = "1";
      } else {
        // this.result = "0";
        if (r == "其他") r = prompt("请输入审核未通过理由：");
        if (!r) return;

        this.res = r;
        rs = r;
      }

      this.DEALREASON({ key, vl, rs });
    }
  }
};
</script>

<style lang="less" scoped>
.apt {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  .title {
    flex-basis: 60px;
    font-size: 18px;
    padding-left: 20px;
    line-height: 60px;
    font-weight: bold;
  }
  .info {
    flex-grow: 1;
    display: flex;
    background-color: #f6f6f6;
    margin: 0 20px 20px 20px;
    .list {
      flex-grow: 1;
      margin: 0 20px 0 0;
      padding-top: 12px;
      p {
        line-height: 44px;
        font-size: 16px;
        padding-left: 20px;
      }
    }
    .pic {
      flex-basis: 500px;
      display: flex;
      flex-direction: column;
      .name {
        flex-basis: 60px;
        font-size: 16px;
        line-height: 60px;
        position: relative;
      }
      .page {
        flex-grow: 1;
        margin: 0 20px 20px 0;
        position: relative;
        // display: flex;
        // flex-direction: row;
        img {
          max-width: 100%;
          max-height: 100%;
          // flex-grow: 1;
          transform: translate(-50%, -50%);
          position: absolute;
          top: 50%;
          left: 50%;
        }
      }
    }
  }
  .reason {
    line-height: 20px;
    color: #f44446;
    padding-left: 20px;
    font-size: 14px;
    position: absolute;
    bottom: 0;
  }
}
</style>
