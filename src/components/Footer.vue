<template>
  <footer>
    <a href="https://www.xust-kcsoft.club" target="_blank" v-cloak class="kcsoft-link">{{ name }}</a>
    <div class="beian">
      <img :src="beiAnImageURL" alt="">
      <a href="http://www.beian.miit.gov.cn/" target="_blank"
         class="beian-info" v-cloak>{{ beianInfo }}</a>
    </div>
  </footer>
</template>

<script>
  import beiAnImageURL from '../assets/images/beian.png';

  export default {
    name: "Footer",
    data() {
      return {
        name: '西安科技大学校软件实验室',
        beianInfo: '陕ICP备 19005593号 - 3',
        beiAnImageURL
      };
    }
  }
</script>

<style scoped>

</style>
