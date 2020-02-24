<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    created() {
      const height = document.documentElement.clientHeight; //获取当前可视区域的高度存到hrt变量
      window.onload = function () { //在页面整体加载完毕时
        document.getElementById('app').style.height = height + 'px'//把获取到的高度赋值给根div
      };
    }
  }
</script>

<style>

</style>
