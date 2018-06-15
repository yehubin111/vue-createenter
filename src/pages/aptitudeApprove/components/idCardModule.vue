<template>
    <div :class="{idcard: true, middle: spc}">
        <p class="name">{{name}}</p>
        <div class="page" ref="vessel">
            <img :src="pic" alt="" ref="pic">
        </div>
    </div>
</template>
<script>
import SelectOption from "./select";
import { mapState, mapMutations } from "vuex";
export default {
  props: ["name", "pic", "spc"],
  components: {
    SelectOption
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less">
.idcard {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  // background-color: #f6f6f6;
  .name {
    flex-basis: 60px;
    font-size: 16px;
    line-height: 60px;
    margin: 0 0 0 20px;
    position: relative;
    // &::after {
    //   content: "";
    //   position: absolute;
    //   width: 10px;
    //   height: 10px;
    //   background-color: #333;
    //   border-radius: 5px;
    //   display: block;
    //   top: 25px;
    //   left: -20px;
    // }
  }
  .page {
    flex-grow: 1;
    margin: 0 20px 0 20px;
    position: relative;
    border: 1px solid #e7ebef;
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
  &.middle {
    margin: 0 20px;
  }
}
</style>

