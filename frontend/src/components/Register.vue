<template>
  <v-container>
    <h2>Register</h2>
    <v-text-field v-model="username" label="Username" />
    <v-text-field v-model="password" label="Password" type="password" />
    <v-btn @click="register">Register</v-btn>
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
    register() {
      axios.post('http://127.0.0.1:8000/api/auth/register/', {
        username: this.username,
        password: this.password
      }).then(res => {
        localStorage.setItem('access', res.data.access)
        localStorage.setItem('username', res.data.username)
        this.$router.push('/account')
      }).catch(err => {
        this.error = err.response.data.error || 'Error'
      })
    }
  }
}
</script>
