<template>
  <div>
    <transition name="alert">
      <v-alert
        v-model="dismissible"
        :type="type"
        border="left"
        close-text="Close Alert"
        :color="color"
        dark
        dismissible
        v-if="dismissible"
        id="alertMsg"
      >
        {{ msg }}
      </v-alert>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Alert",
    data() {
      return {
        msg: 'URL错误，请联系网站管理员',
        type: 'error',
        color: 'red darken-3',
        dismissible: false
      };
    },
    methods: {
      setAlert(msg, type, color) {
        if (this.dismissible) this.dismissible = false;
        this.msg = msg;
        this.type = type;
        this.color = color;
        this.dismissible = !(this.dismissible);
      }
    }
  }

  export const alertConfig = {
    'error': ['error', 'red darken-3'],
    'success': ['success', 'teal lighten-3'],
    'warning': ['warning', 'amber darken-3']
  };
</script>

<style scoped>
  div {
    position: absolute;
    top: 5px;
    width: 60%;
    min-width: 280px;
    z-index: 999;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  #alertMsg {
    white-space: nowrap;
  }

  .alert-enter, .alert-leave-to {
    opacity: 0;
    -webkit-transform: translateY(-100px) translateX(-50%);
    -moz-transform: translateY(-100px) translateX(-50%);
    -ms-transform: translateY(-100px) translateX(-50%);
    -o-transform: translateY(-100px) translateX(-50%);
    transform: translateY(-100px) translateX(-50%);
  }

  .alert-enter-active,
  .alert-leave-active {
    -webkit-transition: all .6s ease;
    -moz-transition: all .6s ease;
    -ms-transition: all .6s ease;
    -o-transition: all .6s ease;
    transition: all .6s ease;
  }

  .alert-move {
    position: absolute;
  }

  @media (max-width: 850px) {
    #alertMsg {
      font-size: 14px;
    }
  }
</style>
