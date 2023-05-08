<template>
  <div id="login">
    <div class="login-form">
      <el-input class="login-item" size="large" v-model="loginInfo.email" placeholder="请输入邮箱"/>
      <el-input class="login-item"
          v-model="loginInfo.password"
          type="password"
          placeholder="请输入密码"
          show-password
      />
      <el-button class="login-item" type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/index'
import axios from '../../utils/http-utils'
import {ref, onMounted} from 'vue'
import * as crypto from 'crypto-js'

interface LoginInfo {
    email: string,
    password: string
}

let loginInfo = ref<LoginInfo>({
    email: '',
    password: ''
})

function login() {
    loginInfo.value.password = crypto.MD5(loginInfo.value.password).toString()
    axios.post('/login', loginInfo.value).then(res => {
        localStorage.setItem("token", res.data.accessToken)
        router.push("/")
    })
}

onMounted(() => {
    localStorage.removeItem('token')
})
</script>

<style scoped lang="scss">
#login {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  margin-top: 250px;
}

.login-form {
  width: 420px;
  display: flex;
  flex-direction: column;
  .login-item {
    margin-bottom: 20px;
    min-height: 50px;
    font-size: 16px;
  }
}
</style>