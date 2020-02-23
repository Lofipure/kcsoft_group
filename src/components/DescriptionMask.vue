<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline" v-text="title"></span>
        </v-card-title>
        <v-card-text v-html="msg"></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">我再想想</v-btn>
          <v-btn color="green darken-1" text @click="ensureSubmit">确认提交</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: "DescriptionMask",
    data() {
      return {
        dialog: false,
        msg: '',
        title: ''
      }
    },
    methods: {
      setDialog(title, msg) {
        this.msg = msg;
        this.title = title;
        this.dialog = true;
      },
      ensureSubmit() {
        this.dialog = false;
        this.$parent.ensureSubmit();
      }
    }
  }
</script>

<style scoped>

</style>
