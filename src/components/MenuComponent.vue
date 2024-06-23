<template>
  <v-toolbar dense class="gradient-toolbar" height="140">
    <!-- Link si titlu pagina -->
    <v-toolbar-title style="text-align: center;">
    <router-link to="/" tag="span" style="cursor: pointer; color: gray; text-decoration: none; font-style: italic; font-family: 'Lucida Handwriting', cursive ;font-size: 1.8rem;">
      {{ appTitle }}
    </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- SEARCH BAR SI icon -->
    <v-text-field
      hide-details
      single-line
      variant="underlined"
    ></v-text-field>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-spacer></v-spacer>

    <v-toolbar-items variant="plain" class="toolbar-items">
      <v-btn
          v-for="item in menuItems"
          :to = "item.path"
          :key="item.title"
          :append-icon= item.icon
      >
      {{item.title }}
      </v-btn>

      <!-- <v-btn
      append-icon="mdi-logout"
      @click="logoutAction">Logout</v-btn> -->
    </v-toolbar-items>
  </v-toolbar>


</template>

<script>
export default {
    data(){
        return {
        appTitle: 'Parfumuri de nișă',
        menuItems: [
            { title: 'Home', path: '/', icon: 'mdi-home' },
            { title: 'Login', path: '/login', icon: 'mdi-account' },
        ],
        menuItemsLogIn: [
            { title: 'Home', path: '/', icon: 'mdi-home' },
            { title: 'Wish List', path: '/wishlist', icon:'mdi-heart' },
            { title: 'My Account', path: '/myaccount', icon:'mdi-account-circle' }
        ],
        }
    },
    methods: {
    logoutAction(){
        this.$router.push('/');
        this.logout();
    }
    },
};
</script>
<style scoped>  
  .toolbar-items {
    display: flex;
    flex-direction: row; 
    justify-content: flex-start;
    margin-right: 100px;
  }
.gradient-toolbar {
  background-image: linear-gradient(to top, #ffbbe4, #f9c3ee, #f2caf5, #ecd1fb, #e7d8ff);
}

@media only screen and (max-width: 600px) {
  .toolbar-items {
    flex-direction: column; 
    align-items: flex-end; 
  }
}
</style>