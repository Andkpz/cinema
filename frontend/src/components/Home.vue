<template>
  <v-container>
    <v-row>
      <v-col
        v-for="movie in movies"
        :key="movie.id"
        cols="12" sm="6" md="4"
      >
        <v-card @click="goToMovie(movie.id)" class="hoverable">
          <v-img :src="movie.poster" height="300px"></v-img>
          <v-card-title>{{ movie.title }}</v-card-title>
          <v-card-subtitle>{{ movie.genre }} | {{ movie.year }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      movies: []
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/movies/')
      .then(res => {
        this.movies = res.data
      })
  },
  methods: {
    goToMovie(id) {
      this.$router.push(`/movie/${id}`)
    }
  }
}
</script>
