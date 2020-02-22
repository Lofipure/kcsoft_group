<template>
  <div id="mainPage">
    <transition appear>
      <Body></Body>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
  import Body from '@/components/Body';
  import Footer from '@/components/Footer';

  export default {
    name: "Main",
    components: {
      Body,
      Footer
    }
  }
</script>

<style scoped>

</style>
