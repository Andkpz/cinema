<template>
  <v-container v-if="movie">
    <v-img :src="movie.poster" height="400px"></v-img>
    <h1>{{ movie.title }}</h1>
    <p><strong>Genre:</strong> {{ movie.genre }}</p>
    <p><strong>Year:</strong> {{ movie.year }}</p>
    <p><strong>Duration:</strong> {{ movie.duration }} min</p>
    <p>{{ movie.description }}</p>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      movie: null
    }
  },
  created() {
    const id = this.$route.params.id
    axios.get(`http://127.0.0.1:8000/api/movies/${id}/`)
      .then(res => {
        this.movie = res.data
      })
  }
}
</script>
