<template>
  <div class="contaniner">
    <div class="content">
      <v-form>
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
          @click="handleRegiste"
        >
          Registe
        </v-btn>

        <v-progress-linear
          v-show="loading"
          color="deep-purple accent-4"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    password: '',
    loading: false
  }),
  computed: {
    valid ({ name, password }) {
      return name && password
    }
  },
  methods: {
    async handleRegiste () {
      this.loading = true

      const AUTHS = 'AUTHS'

      const data = sessionStorage.getItem(AUTHS)

      const auths = data ? JSON.parse(data) : []

      const authMap = new Map(auths.map(({ name, password }) => [name, password]))

      const { name, password } = this

      if (authMap.has(name)) {
        auths.push({
          name, password
        })

        sessionStorage.setItem(AUTHS, auths)

        this.loading = false

        this.$router.push({
          path: '/login'
        })
      } else {
        this.loading = false
      }
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
