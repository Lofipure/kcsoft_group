<template>
  <div class="container" data-app="true">
    <v-form
      class="form-box"
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
      @input="formChange"
    >
      <div class="logo-header">
        <div class="logo" @click="gotoKCSOFTMainPage">
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
          <v-col cols="6">
            <v-select
              v-model="college"
              :items="collegeItems"
              :rules="[v => !!v || '学院是必须的']"
              label="学院"
              required
              @change="getMajorInfo"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="major"
              :items="majorItems"
              :rules="[v => !!v || '当然，专业也是']"
              label="专业"
              required
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <div class="iphone5-b-div input-row">
        <v-select
          v-model="group"
          :items="groupItems"
          :rules="[v => !!v || '？这个得填']"
          label="分组"
          required
          @change="groupChange"
        ></v-select>
      </div>
      <div class="description"></div>
      <div class="iphone5-div">
        <v-row class="iphone5-v-row">
          <v-col class="iphone5-v-col">
            <v-btn
              color="success"
              @click="submit"
              :disabled="submitDisabled"
              v-cloak
            >
              {{ submitInfo.normal }}
            </v-btn>
          </v-col>
          <v-col class="iphone5-v-col">
            <v-btn
              color="primary"
              @click="reset"
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
  import axios from 'axios';

  import {alertConfig} from "@/components/Alert";

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
          v => (v && v.length === 11) || '学号有这么长吗？',
        ],

        college: '',
        collegeItems: [],
        collegeDictionary: {},

        major: '',
        majorItems: [],
        majorDictionary: {},

        group: '',
        groupItems: [],
        groupDictionary: {},

        submitInfo: {
          'cannot': '信息没写完哦',
          'normal': '信息没写完哦'
        },
        submitDisabled: true
      };
    },
    methods: {
      gotoKCSOFTMainPage() {
        window.open('https://www.xust-kcsoft.club', '__blank');
      },
      getMajorInfo() {
        const collegeCode = this.collegeDictionary[this.college];
        axios.get('http://group.xust-kcsoft.club/src/collegeAndMajor.php', {
          params: {
            type: 'major',
            collegecode: collegeCode
          }
        }).then(value => {
          if (value.data.length === 0) {
            console.error(value);
            this.$emit('setalert', 'URL错误，请联系网站管理员', ...(alertConfig.error));
          } else {
            this.majorItems = [];
            value.data.forEach(value => {
              this.majorItems.push(value.major_name);
              this.majorDictionary[value.major_name] = value.major_code;
            });
          }
        }, reason => {
          console.error(reason);
          this.$emit('setalert', '网络错误，请稍后再试', ...(alertConfig.error));
        });
      },
      formChange() {
        if ((this.name.length > 0 && this.name.length <= 5)
          && (this.studentId.length === 11)
          && (this.college !== '' && this.major !== '' && this.group !== '')
        ) {
          this.submitDisabled = false;
          this.submitInfo.normal = `我选择${this.group}${this.group === '算法' ? '组' : ''}！`;
        } else {
          this.submitDisabled = true;
          this.submitInfo.normal = this.submitInfo.cannot;
        }
      },
      groupChange() {
        if (!(this.submitDisabled)) {
          // 如果现在可以改变 submit 样式
          this.submitInfo.normal = `我选择${this.group}${this.group === '算法' ? '组' : ''}！`;
        }
      },
      submit() {
        console.log([
          this.name,
          this.studentId,
          this.collegeDictionary[this.college],
          this.majorDictionary[this.major],
          this.groupDictionary[this.group].id
        ]);
      },
      reset() {
        this.$refs.form.reset();
        this.name = '';
        this.studentId = '';
      }
    },
    beforeMount() {
      axios.get('http://group.xust-kcsoft.club/src/collegeAndMajor.php', {
        params: {
          type: 'college'
        }
      }).then(value => {
        if (value.data.length === 0) {
          console.error(value);
          this.$emit('setalert', 'URL错误，请联系网站管理员', ...(alertConfig.error));
        } else {
          // console.log(value);
          this.collegeItems = [];
          value.data.forEach(value => {
            this.collegeItems.push(value.college_name);
            this.collegeDictionary[value.college_name] = value.college_code;
          });
        }
      }, reason => {
        console.error(reason);
        this.$emit('setalert', '网络错误，请稍后再试', ...(alertConfig.error));
      });
      axios.get('http://group.xust-kcsoft.club/src/collegeAndMajor.php', {
        params: {
          type: 'group'
        }
      }).then(value => {
        this.groupItems = [];
        value.data.forEach(value => {
          this.groupItems.push(value.name);
          this.groupDictionary[value.name] = {
            'id': value.id,
            description: value.description
          };
        });
      }, reason => {
        console.error(reason);
        this.$emit('setalert', '网络错误，请稍后再试', ...(alertConfig.error));
      });
    }
  }
</script>

<style scoped>

</style>
