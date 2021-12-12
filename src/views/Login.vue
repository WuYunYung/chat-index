<template>
  <div class="contaniner">
    <div class="content">
      <div class="logo">
        <i class="iconfont icon-chat"></i>
        chat-index
      </div>
      <el-form label-position="left" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    labelPosition: 'right',
    formLabelAlign: {
      name: '',
      region: '',
      type: ''
    }
  }),
  computed: {
    valid ({ name, password }) {
      return name && password
    }
  },
  methods: {
    handleLogin () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.contaniner {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .content {
    max-width: 375px;
    .logo{
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-bottom: 3rem;
      font-size: 2rem;
      .iconfont{
        font-size: 4rem;
        color: $--color-primary;
      }
    }
  }
}
</style>
