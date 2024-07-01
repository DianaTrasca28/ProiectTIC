<template>
    <v-card class="mx-auto my-4" max-width="344">
      <v-img :src="perfume.image" height="200px" cover></v-img>
      <v-card-title>{{ perfume.name }}</v-card-title>
      <v-card-subtitle>{{ perfume.description }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" @click="addToWishlist" text>wishlist</v-btn>
        <v-spacer></v-spacer>
        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            Price: {{ perfume.price }}<br />
            Size: {{ perfume.size }}<br />
            Notes: {{ perfume.notes}}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  export default {
    name: 'PerfumeCard',
    props: {
      perfume: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      show: false,
    }),
    methods: {
    ...mapActions('authModule', ['addPerfumeToWishlist']),
    addToWishlist() {
      this.addPerfumeToWishlist(this.perfume);
    }
  }
  }
  </script>
  
  <style scoped>
  .v-card {
    margin: 1rem;
  }
  </style>