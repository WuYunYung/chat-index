<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <i class="iconfont icon-chat"></i>
        chat-index
      </div>
      <el-form :model="form">
        <el-form-item>
          <el-input
            v-model.number="form.phone"
            placeholder="手机号"
            maxlength="11"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码"
            @keydown.enter="onLogin"
          >
            <el-button slot="append" @click="onForget">忘记密码？</el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <div class="buttons">
        <el-button type="primary" round class="login" @click="onLogin">
          登录
        </el-button>
        <el-button type="text" class="register" @click="onRegister">
          新用户注册
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ct-login',
    data: () => ({
      form: {
        phone: '',
        password: ''
      }
    }),
    computed: {
      valid ({ name, password }) {
        return name && password
      }
    },
    created() {
      const AUTH = 'AUTH'
      const data = sessionStorage.getItem(AUTH)
      if (data) {
        this.form = JSON.parse(data)
      }
    },
    methods: {
      onLogin() {
        const data = localStorage.getItem('AUTHS')
        if (data) {
          const { phone, password } = this.form
          const auths = new Map(
            JSON.parse(data).map((auth) => [auth.phone, auth.password])
          )
          console.log(auths)
          if (!auths.has(phone)) {
            this.$message({
              type: 'error',
              message: '暂无此用户'
            })
            return
          }
          const _password = auths.get(phone)
          if (_password !== password) {
            this.$message({
              type: 'error',
              message: '密码错误'
            })
            return
          }

          sessionStorage.setItem('AUTH', JSON.stringify(this.form))

          this.$message.success('登录成功！')

          this.$router.push({
            path: '/'
          })
        } else {
          this.$message({
            type: 'error',
            message: '暂无此用户'
          })
        }
      },
      onRegister () {
        this.$router.push({
          path: '/register'
        })
      },
      onForget () {
        this.$message({
          type: 'error',
          message: '暂无此功能'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
.container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .content {
    max-width: 375px;
    .logo {
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-bottom: 3rem;
      font-size: 2rem;
      .iconfont {
        font-size: 4rem;
        color: $--color-primary;
      }
    }
    .buttons {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 2rem;
      .login {
        width: 10rem;
      }
    }
  }
}
</style>
