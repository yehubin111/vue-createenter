<template>
    <div class="idcard">
        <p class="name">{{name}}
            <select-option :choice="choice" :result="result" :reason="reason"></select-option>
        </p>
        <div class="page" ref="vessel">
            <img :src="pic" alt="" ref="pic">
        </div>
        <div class="button" v-if="userstatus == 'DOING'"> 
            <div class="box"> 
                <span class="leftrotate" @click="toRotate(1)">
                    <icon class="icon" name="turn" scale="2.5"></icon>
                </span>
                <span class="reset" @click="toRotate(0)">复原</span>
                <span class="rightrotate" @click="toRotate(2)">
                    <icon class="icon" name="turn" scale="2.5"></icon>
                </span>
            </div>
        </div>
        <p class="reason" v-if="result === '0'">{{res}}</p>
    </div>
</template>
<script>
import SelectOption from "./select";
import { mapState, mapMutations } from "vuex";
export default {
  props: ["name", "pic", "reason", "id"],
  components: {
    SelectOption
  },
  data() {
    return {
      // result: "",
      rotateDeg: 0,
      res: ""
    };
  },
  computed: {
    ...mapState(["checkreason", "userstatus"]),
    result() {
      let st = this.checkreason.filter(v => v.key == this.id);
      if (!st[0]) return "";
      return st[0].vl == true ? "1" : "0";
    },
    vesselHeight() {
      return this.$refs.vessel.offsetHeight;
    },
    picWidth() {
      return this.$refs.pic.width;
    }
  },
  methods: {
    ...mapMutations(["DEALREASON"]),
    choice(res, r) {
      let key = this.id;
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
    },
    toRotate(key) {
      if (key == 1) this.rotateDeg -= 90;
      if (key == 2) this.rotateDeg += 90;
      if (key == 0) this.rotateDeg = 0;

      this.$refs.pic.style.transform = `translate(-50%, -50%) rotate(${
        this.rotateDeg
      }deg)`;

      if (Math.abs(this.rotateDeg / 90) % 2 == 1) {
        this.$refs.pic.width =
          this.picWidth > this.vesselHeight ? this.vesselHeight : this.picWidth;
      } else {
        this.$refs.pic.width =
          this.picWidth > this.vesselHeight ? this.picWidth : this.vesselHeight;
      }
    }
  }
};
</script>

<style lang="less">
.idcard {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  .name {
    flex-basis: 60px;
    font-size: 16px;
    line-height: 60px;
    margin: 0 0 0 20px;
    position: relative;
  }
  .page {
    flex-grow: 1;
    margin: 20px;
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
  .button {
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, 0);
    .box {
      overflow: hidden;
      display: inline-block;
      span {
        width: 32px;
        height: 27px;
        line-height: 22px;
        background-color: #1da1f2b5;
        float: left;
        margin: 0 5px;
        cursor: pointer;
        border-radius: 16px;
        padding: 5px 0 0 0;
        &.leftrotate {
          transform: rotateY(180deg);
        }
        &:hover {
          background-color: #4aafed;
        }
        &.reset {
          background-color: #ddd;
          font-size: 12px;
          width: 40px;
          &:hover {
            background-color: #d6d6d6;
          }
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
    bottom: -20px;
  }
}
</style>

