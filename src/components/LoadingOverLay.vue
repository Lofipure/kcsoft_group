<template>
  <v-overlay :value="overlay">
    <v-progress-circular indeterminate size="64" z-index="999"></v-progress-circular>
  </v-overlay>
</template>

<script>
  export default {
    name: "LoadingOverLay",
    data() {
      return {
        overlay: false,
      };
    },
    methods: {
      setter(overlay) {
        this.overlay = overlay;
      }
    }
  }
</script>

<style scoped>

</style>
