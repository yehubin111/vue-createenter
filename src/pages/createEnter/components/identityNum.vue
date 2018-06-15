<template>
    <div class="baseinfo">
        <div class="line">
            <span class="l-name">身份证：</span>
            <span class="l-value">{{idcardnum}}</span>
            <select-option :choice="choice" :result="result" :reason="reason"></select-option>
        </div>
        <p class="reason" v-if="result === '0'">{{res}}</p>
    </div>
</template>
<script>
import SelectOption from "./select";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    SelectOption
  },
  data() {
    return {
      // result: "",
      reason: ["身份证号码与提供照片资料不符"],
      res: ""
    };
  },
  computed: {
    ...mapState(["idcardnum", "checkreason"]),
    result() {
      let st = this.checkreason.filter(v => v.key == "id");
      if (!st[0]) return "";
      return st[0].vl == true ? "1" : "0";
    }
  },
  methods: {
    ...mapMutations(["DEALREASON"]),
    choice(res, r) {
      let key = "id";
      let vl = res;
      let rs = "";
      if (res == "right") {
        // this.result = "1";
      } else {
        // this.result = "0";
        this.res = r;
        rs = r;
      }

      this.DEALREASON({ key, vl, rs });
    }
  }
};
</script>
<style lang="less" scoped>
.baseinfo {
  flex: 1;
  position: relative;
  .line {
    line-height: 60px;
    font-size: 16px;
    background-color: #f6f6f6;
    position: relative;
    .l-name {
      margin: 0 0 0 20px;
    }
  }
  .reason {
    line-height: 20px;
    color: #f44446;
    padding-left: 20px;
    font-size: 14px;
    position: absolute;
    top: 60px;
  }
}
</style>
