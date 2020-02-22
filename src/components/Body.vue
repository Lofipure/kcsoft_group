<template>
  <div class="container" data-app="true">
    <v-form
      class="form-box"
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <div class="logo-header">
        <div class="logo">
          <img :src="LOGO" alt=""/>
        </div>
        <div class="title">
          <h3 v-cloak>{{ titleMsg }}</h3>
        </div>
      </div>
      <div class="input-row">
        <v-text-field
          v-model="name"
          :counter="5"
          :rules="nameRules"
          label="姓名"
          required
        ></v-text-field>
      </div>
      <div class="input-row">
        <v-text-field
          v-model="studentId"
          :counter="11"
          :rules="studentIdRules"
          label="学号"
          required
        ></v-text-field>
      </div>
      <div>
        <v-row justify="space-around">
          <v-col>
            <v-select
              v-model="college"
              :items="collegeItems"
              :rules="[v => !!v || 'Item is required']"
              label="College"
              required
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              v-model="major"
              :items="majorItems"
              :rules="[v => !!v || 'Item is required']"
              label="Major"
              required
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row justify="space-around">
          <v-col>
            <v-select
              v-model="college"
              :items="collegeItems"
              :rules="[v => !!v || 'Item is required']"
              label="Main"
              required
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              v-model="major"
              :items="majorItems"
              :rules="[v => !!v || 'Item is required']"
              label="Sub"
              required
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <div></div>
      <div class="iphone5-div">
        <v-row class="iphone5-v-row">
          <v-col class="iphone5-v-col">
            <v-btn
              color="success"
              @click=""
            >
              我选择xx组！
            </v-btn>
          </v-col>
          <v-col class="iphone5-v-col">
            <v-btn
              color="primary"
              @click=""
            >
              Reset
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-form>
  </div>
</template>

<script>
  import LOGO from '@/assets/images/logo.png';

  export default {
    name: "Body",
    data() {
      return {
        LOGO,
        titleMsg: '2019级分组统计',

        valid: true,
        lazy: false,

        name: '',
        nameRules: [
          v => !!v || '不能没有名字哦',
          v => (v && v.length <= 5) || '你的名字没有这么长吧',
        ],

        studentId: '',
        studentIdRules: [
          v => !!v || '竟然不想填学号？',
          v => (v && v.length <= 11) || '学号有这么长吗？',
        ],

        college: '',
        collegeItems: [
          '通信学院',
          '计算机学院'
        ],

        major: '',
        majorItems: [
          '1', '2'
        ]
      };
    },
    methods: {},
  }
</script>

<style scoped>

</style>
