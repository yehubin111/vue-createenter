<template>
    <div class="baseinfo">
        <div class="line">
            <span class="l-name">身份证：</span>
            <span class="l-value">{{idcardnum}}</span>
        </div>
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

    };
  },
  computed: {
    ...mapState(["idcardnum"])
  },
  methods: {

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
    // background-color: #f6f6f6;
    position: relative;
    .l-name {
      margin: 0 0 0 20px;
      // &::after{
      //   content: '';
      //   position: absolute;
      //   width: 10px;
      //   height: 10px;
      //   background-color: #333;
      //   border-radius: 5px;
      //   display: block;
      //   top: 25px;
      //   left: 0;
      // }
    }
  }
}
</style>
