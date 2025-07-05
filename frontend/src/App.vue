<template>
  <v-app>
      <v-app-bar app>
        <v-toolbar-title @click="$router.push('/')">Movie Cards</v-toolbar-title>
        <v-spacer />
        <v-btn text @click="$router.push('/login')">Login</v-btn>
        <v-btn text @click="$router.push('/register')">Register</v-btn>
        <v-btn text @click="$router.push('/account')">Account</v-btn>
      </v-app-bar>


    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Optional: Global styles */
</style>
