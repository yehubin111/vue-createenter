<template>
    <div class="app" id="app">
        <router-view></router-view>
    </div>
</template>
<script> 
export default {
    name: 'app'  
}
</script>  
<style lang="less">
@import '../common/less/reset.less';

body{
    background-color: rgb(233, 238, 242);
}
</style>

