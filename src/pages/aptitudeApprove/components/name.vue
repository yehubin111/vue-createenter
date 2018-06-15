<template>
    <div class="baseinfo">
        <div class="line">
            <span class="l-name">姓名：</span>
            <span class="l-value">{{name}}</span>
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
    ...mapState(["name"])
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
.baseinfo {
  flex: 1;
  margin: 0 20px 0 0;
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
