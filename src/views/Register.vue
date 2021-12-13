<template>
  <div class="register-container">
    <div class="logo">
      <i class="iconfont icon-chat"></i>
      chat-index
    </div>
    <div class="content">
      <div class="title">新用户注册</div>
      <el-form :rules="rules" status-icon :model="form">
        <el-form-item>
          <el-input
            v-model.number="form.phone"
            placeholder="手机号"
            maxlength="11"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model.number="form.validCode" placeholder="验证码">
            <el-button slot="append" @click="handleSendValidCode">
              发送验证码
            </el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password" placeholder="密码">
          </el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input
            v-model="form.confirmPassword"
            type="password"
            placeholder="确认密码"
            @keydown.enter="onRegister"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div class="buttons">
        <el-button type="primary" round class="login" @click="onRegister">
          注册
        </el-button>
        <el-button type="text" class="register" @click="onLogin">
          已有账号？登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ct-register',
    data() {
      const validatePassword = (rule, value, callback) => {
        const { password = '' } = this.form || {}
        switch (value) {
          case '':
            callback(new Error('请再次输入密码'))
            return
          case password:
            callback()
            return
          default:
            callback(new Error('两次输入密码不一致!'))
        }
      }
      return {
        form: {
          phone: '',
          password: '',
          validCode: '',
          confirmPassword: ''
        },
        rules: {
          confirmPassword: [
            {
              validator: validatePassword,
              trigger: 'blur'
            }
          ]
        }
      }
    },
    computed: {
      valid({ name, password }) {
        return name && password
      }
    },
    methods: {
      onLogin() {
        this.$router.push({
          path: '/login'
        })
      },
      onRegister() {
        const [AUTH, AUTHS] = ['AUTH', 'AUTHS']
        const data = sessionStorage.getItem(AUTHS)
        const auths = JSON.parse(data) || []
        const { phone, password } = this.form
        if (data) {
          const phones = auths.map(auth => auth.phone)
          if (phones.includes(phone)) {
            this.$message.error('当前号码已被创建')
            return
          }
        }

        const auth = { phone, password }
        auths.push(auth)

        localStorage.setItem(AUTHS, JSON.stringify(auths))
        sessionStorage.setItem(AUTH, JSON.stringify(auth))

        this.$message.success('注册成功')

        this.$router.push({
          path: '/login',
          param: auth
        })
      },
      handleSendValidCode() {
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
.register-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  .logo {
    display: flex;
    align-items: center;
    position: absolute;
    padding: 1rem;
    gap: 1rem;
    left: 0;
    top: 0;
    .iconfont {
      font-size: 2rem;
      color: $--color-primary;
    }
  }
  .content {
    max-width: 375px;
    .title {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 2rem;
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
