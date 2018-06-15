<template>
    <div class="card">
      <card-module :name="name1" :pic="idcardpic1"></card-module>
      <card-module :name="name2" :pic="idcardpic2"></card-module>
      <card-module :name="name3" :pic="idcardpic3"></card-module>
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
      spc: true
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
}
</style>
