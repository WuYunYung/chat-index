<template>
  <div class="contaniner">
    <div class="content">
      <v-form >
        <v-text-field v-model="name" label="Name" required></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          required
        ></v-text-field>
        <v-btn
          depressed
          color="primary"
          :disabled="!valid"
          @click="handleLogin"
        >
          Login
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    password: ''
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

<style scoped>
.contaniner {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.content {
  max-width: 375px;
}
</style>
