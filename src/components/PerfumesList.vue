<template>
    <v-container>
      <v-row>
        <v-col v-for="perfume in perfumes" :key="perfume.id" cols="12" sm="6" md="4">
          <PerfumeCard :perfume="perfume" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import PerfumeCard from '@/components/PerfumeCard';
  
  export default {
    components: {
      PerfumeCard
    },
    data() {
      return {
        perfumes: []
      };
    },
    async created() {
      try {
        debugger
        const response = await fetch('http://localhost:8000/api/perfumes/');
        this.perfumes = await response.json();
      } catch (error) {
        console.error('Error fetching perfumes:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  .v-container {
    padding-top: 2rem;
  }
  </style>