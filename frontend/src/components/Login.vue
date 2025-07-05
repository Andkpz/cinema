<template>
  <v-container>
    <h2>Login</h2>
    <v-text-field v-model="username" label="Username" />
    <v-text-field v-model="password" label="Password" type="password" />
    <v-btn @click="login">Login</v-btn>
    <p v-if="error">{{ error }}</p>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return { username: '', password: '', error: '' }
  },
  methods: {
    login() {
      axios.post('http://127.0.0.1:8000/api/auth/login/', {
        username: this.username,
        password: this.password
      }).then(res => {
        localStorage.setItem('access', res.data.access)
        localStorage.setItem('username', this.username)
        this.$router.push('/account')
      }).catch(() => {
        this.error = 'Invalid credentials'
      })
    }
  }
}
</script>
