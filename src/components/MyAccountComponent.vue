<template>
    <div class="infoContainer">
      <v-card style="width: 500px; max-width: 500px; margin-top: 20px;">
        <v-card-title>
          <h3 style="font-size: 1.7rem;text-align: center; font-family: 'Courier New', Courier, monospace; margin-top: 20px;">User Details</h3>
        </v-card-title>
        <v-avatar size="100" style="margin-left: 10px;">
          <v-icon >mdi-account-circle</v-icon>
        </v-avatar>
        <v-card-text  style="padding-left: 1.5rem;">
          <p><strong>Surname:</strong> {{ user.lastName }}</p>
          <p><strong>First Name:</strong> {{ user.firstName }}</p>
          <p><strong>Email:</strong> {{userEmail}}</p>
          <p><strong>The number of perfumes I want, saved in Wish list:</strong> {{ wishListCount}}</p>
        </v-card-text>
     </v-card>
    </div>
  </template>
  
  <script>
  import { ref,computed } from 'vue';
  import store from '@/store';
  export default {
    setup() {
      const wishList = computed(() => store.state.authModule.currentUser.wishList);
      const userEmail = computed(() => store.state.authModule.currentUser.email);
      const lastName = computed(() => store.state.authModule.currentUser.lastName);
      const firstName = computed(() => store.state.authModule.currentUser.firstName);
      const user = ref({
          lastName: lastName.value,
          firstName: firstName.value,
        });

        const wishListCount = wishList.value.length;
    
        return{user, userEmail, editMode, wishListCount};
      },
 
  };
  </script>
  <style scoped>
  
  .infoContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  }
  
  </style>