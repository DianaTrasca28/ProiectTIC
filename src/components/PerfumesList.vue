<template>
   <div>
    <v-container>
      <v-row no-gutters justify="center">
        <v-col
          v-for="(perfume, index) in paginatedPerfumes"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="ma-2 pa-2"
        >
          <PerfumeCard :perfume="perfume" />
        </v-col>
      </v-row>
    </v-container>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      rounded="circle"
    ></v-pagination>
  </div>
  </template>
  
  <script>
  import {ref, computed, watch } from 'vue';
  import PerfumeCard from '@/components/PerfumeCard';
  import { mapGetters, mapActions } from 'vuex';
  import { useStore } from 'vuex';
  export default {
    components: {
      PerfumeCard
    },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 12,
      };
    },
    setup(){
      let currentPage = ref(1);
      const store = useStore();
      const filteredPerfumes = computed(() => store.getters['authModule/filteredPerfumes']);
      const searchText = computed(() => store.getters['authModule/searchText']);
      const resetPagination = () => {
        currentPage = 1;
      };
      watch(searchText, () => {
        resetPagination();
      });

      const updateSearchText = (text) => {
      store.dispatch('authModule/updateSearchText', text);
    };
      return { filteredPerfumes, searchText, updateSearchText };
    },

    computed: {
    paginatedPerfumes() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPerfumes.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredPerfumes.length / this.itemsPerPage);
    }
  },

  async created() {
      try {
        const response = await fetch('http://localhost:8000/api/perfumes/');
        this.perfumes = await response.json();
        this.$store.commit('authModule/setPerfumes', this.perfumes);
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