<template>
  <div id="mainPage">
    <Alert ref="alert" v-if="alertIsAlive"></Alert>
    <transition appear>
      <Body @setalert="setAlert"></Body>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
  import Body from '@/components/Body';
  import Footer from '@/components/Footer';
  import Alert from '@/components/Alert';

  export default {
    name: "Main",
    components: {
      Body,
      Footer,
      Alert
    },
    data() {
      return {
        alertIsAlive: true,
      };
    },
    methods: {
      setAlert(msg, type, color) {
        this.$refs.alert.setAlert(msg, type, color);
      }
    }
  }
</script>

<style scoped>

</style>
