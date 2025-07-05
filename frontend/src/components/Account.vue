<template>
  <v-container>
    <h2 v-if="username">Hi {{ username }} 👋</h2>
    <v-btn @click="logout">Logout</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem('username')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('access')
      localStorage.removeItem('username')
      this.$router.push('/')
    }
  }
}
</script>
