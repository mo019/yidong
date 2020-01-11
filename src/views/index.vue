<template>
  <div class="login">
      <van-nav-bar title="登陆" />
      <van-cell-group>

        <van-field label='手机号'
        clearable
        required
        v-model="user.mobile"
         placeholder='请输入手机号' />

        <van-field label='验证码'
        clearable
        required
         v-model="user.code"
         placeholder='请输入验证码' />

      </van-cell-group>
      <div class="login-btn-container">
      <van-button class="login-btn" @click="onLogin" type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage', // 名字可有可无
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onLogin () {
      console.log('ssshhhhshsh')
    }
  }
}
</script>

<style lang='less' scoped>

    .login-btn-container {
      padding: 20px;
      .login-btn {
        width: 100%;
      }
    }
</style>
