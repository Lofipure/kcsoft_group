<template>
  <div id="mainPage">
    <Alert ref="alert" v-if="alertIsAlive"></Alert>
    <transition appear>
      <Body
        ref="body"
        @setalert="setAlert"
        @setmask="setMask"
        @setoverlay="setOverlay"
      ></Body>
    </transition>
    <Footer></Footer>
    <DescriptionMask
      @setoverlay="setOverlay"
      ref="mask"
      style="position: absolute"
    ></DescriptionMask>
    <loading-over-lay
      ref="overlay"
      style="position: fixed"
    ></loading-over-lay>
  </div>
</template>

<script>
  import Body from '@/components/Body';
  import Footer from '@/components/Footer';
  import Alert from '@/components/Alert';
  import DescriptionMask from '@/components/DescriptionMask';
  import LoadingOverLay from '@/components/LoadingOverLay';

  export default {
    name: "Main",
    components: {
      Body,
      Footer,
      Alert,
      DescriptionMask,
      LoadingOverLay
    },
    data() {
      return {
        alertIsAlive: true,
      };
    },
    methods: {
      setAlert(msg, type, color) {
        this.$refs.alert.setAlert(msg, type, color);
      },
      setMask(title, msg) {
        this.$refs.mask.setDialog(title, msg);
      },
      setOverlay(target) {
        this.$refs.overlay.setter(target);
      },
      ensureSubmit() {
        this.$refs.body.ensureSubmit();
      }
    }
  }
</script>

<style scoped>

</style>
