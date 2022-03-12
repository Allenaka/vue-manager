<template>
  <el-card
    class="box-card"
  >
    <div slot="header" class="clearfix">
      <span>系统登录</span>
    </div>
    <el-form
      :model="form"
      :rules="rules"
      ref="loginForm"
      status-icon
    >
      <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
      >
        <el-input v-model="form.username" maxlength="16"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        label-width="80px"
        prop="password"
      >
        <el-input
          type="password"
          v-model="form.password"
          maxlength="16"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
        <el-button @click="handleRegister">去注册</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import {login} from '../api/data'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {max: 16, message: '长度不能超过16', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {max: 16, message: '长度不能超过16', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleLogin() {
      // this.$refs.loginForm.
      login(this.form)
        .then(
          data => {
            if (!data.data.errno) {
              this.$message.success('登陆成功')
              this.$store.commit('setToken', data.data.token)
              setTimeout(() => {
                this.jump('/home')
              },1000)
            } else {
              this.$message.error(data.data.msg)
            }
          }
        )
    },
    handleRegister() {
      this.jump('/register')
    },
  }
}
</script>

<style lang="less" socped>
  .box-card {
    width: 400px;
    margin: 0 auto;
    transform: translateY(100%);
    text-align: center;
    
    .el-input__validateIcon::before {
      color: #1fe753;
    }
    .el-input__validateIcon.el-icon-circle-close::before {
      color: #F56C6C
    }
  }
</style>