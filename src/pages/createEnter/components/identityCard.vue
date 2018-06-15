<template>
    <div class="card">
        <div class="left">
            <div class="top">
                <card-module :name="name1" :pic="idcardpic1" :reason="reason1" :id="'idcard1'"></card-module>
            </div>
            <div class="bottom">
                <card-module :name="name2" :pic="idcardpic2" :reason="reason2" :id="'idcard2'"></card-module>
            </div>
        </div>
        <div class="right">
            <card-module :name="name3" :pic="idcardpic3" :reason="reason3" :id="'idcard3'"></card-module>
        </div>
    </div>
</template>
<script>
import CardModule from "./idCardModule"
import { mapState } from 'vuex'
export default {
  data() {
    return {
      name1: "身份证照片（人像）",
      name2: "身份证照片（国徽）",
      name3: "手持身份证",
      reason1: ['身份证人像面照片信息不清晰', '提交身份证照片资料不符合认证规范'],
      reason2: ['身份证国徽面照片信息不清晰', '提交身份证照片资料不符合认证规范'],
      reason3: ['手持身份证照片信息不清晰', '提交身份证照片资料不符合认证规范']
    };
  },
  components: {
    CardModule
  },
  computed: {
      ...mapState(['idcardpic1', 'idcardpic2', 'idcardpic3'])
  }
};
</script>
<style lang="less" scoped>
.card {
  flex-grow: 1;
  display: flex;
  .left {
    flex: 1;
    margin: 0 20px 0 0;
    display: flex;
    flex-direction: column;
    .top {
      flex: 1;
      margin: 0 0 20px 0;
      background-color: #f6f6f6;
      display: flex;
    }
    .bottom {
      flex: 1;
      background-color: #f6f6f6;
      display: flex;
    }
  }
  .right {
    flex: 1;
    background-color: #f6f6f6;
    display: flex;
  }
}
</style>
