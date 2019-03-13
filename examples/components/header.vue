<template>
  <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : ''">
    <div class="header-content">
      <router-link :to="{name: 'index'}">首页</router-link>
      <router-link :to="{name: 'test'}">组件</router-link>
    </div>
  </header>
</template>
<script>
export default{
  data () {
    return {

    }
  }
}
</script>
<style lang="less" type="text/less">
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-content {
      margin: 0 auto;
      display: flex;
      width: 90%;
      height: 80px;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
