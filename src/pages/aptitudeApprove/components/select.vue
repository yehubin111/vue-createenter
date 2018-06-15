<template>
    <div class="l-select" v-if="status == 'DOING'">
                <i :class="{right: true, on: tsright }" @click="choice('right')">
                    <icon class="icon" name="right"></icon>
                </i>
                <i :class="{wrong: true, on: tswrong}" @click.stop="showWrong" v-clickOutside="hideWrong">
                    <icon class="icon" name="wrong"></icon>
                </i>
                <transition name="fade">
                <ul class="wronginfo" v-show="wrongInfo">
                  <li v-for="(f, index) in reason" :key="index" @click="selectWrong(f)">{{f}}</li>
                </ul>
                </transition>
            </div>
</template>
<script>
import{mapState} from 'vuex'
export default {
  props: ["choice", "result", "reason"],
  data() {
    return {
      wrongInfo: false
    }
  },
  methods: {},
  computed: {
    ...mapState(['status']),
    tsright() {
      if (this.result === "1") return true;
    },
    tswrong() {
      if (this.result === "0") return true;
    }
  },
  methods: {
    showWrong() {
      console.log(0);
      this.wrongInfo = !this.wrongInfo;
    },
    hideWrong() {
      console.log(1);
      this.wrongInfo = false;
    },
    selectWrong(r) {
      this.wrongInfo = false;
      this.choice('wrong', r);
    }
  }
};
</script>
<style lang="less" scoped>
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity .3s;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }
.l-select {
  position: absolute;
  top: 0;
  right: 0;
  .wronginfo{
    border-radius: 3px;
    box-shadow: 0 5px 10px -2px rgba(0, 0, 0, .2);
    overflow: hidden;
    position: absolute;
    z-index: 70;
    font-size: 14px;
    background-color: #fff;
    top: 60px;
    right: 0;
    li{
      color: #333;
      padding: 0 10px;
      cursor: pointer;
      background-color: #fff;
      width: 225px;
      height: 34px;
      line-height: 34px;
      &:hover{
        background-color: #f4fbff;
        color: #1da1f2;
      }
    }
  }
  i {
    float: left;
    width: 44px;
    height: 44px;
    display: block;
    margin: 8px 6px 0 0;
    .icon {
      width: 44px;
      height: 44px;
      color: #ccc;
      cursor: pointer;
    }
    &.right {
      &:hover {
        .icon {
          color: #3ca071;
        }
      }
      &.on {
        .icon {
          color: #3ca071;
        }
      }
    }
    &.wrong {
      margin-right: 10px;
      &:hover {
        .icon {
          color: #f44446;
        }
      }
      &.on {
        .icon {
          color: #f44446;
        }
      }
    }
  }
}
</style>



