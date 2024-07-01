<template>
  <v-toolbar dense class="gradient-toolbar" height="140">
    <!-- Link si titlu pagina -->
    <v-toolbar-title style="text-align: center; margin-left: 100px;">
    <router-link to="/" tag="span" style="cursor: pointer; color: #696969; text-decoration: none; font-style: italic; font-family: 'Lucida Handwriting', cursive ;font-size: 1.5rem;">
      {{ appTitle }}
    </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- SEARCH BAR SI icon -->
    <v-text-field
      v-model="searchText"
      hide-details
      single-line
      variant="underlined"
      @input="updateSearch"
    ></v-text-field>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <div v-if="authenticated">
      <v-toolbar-items variant="plain" class="toolbar-items">
          <v-btn
              v-for="item in menuItemsLogIn"
              :to = "item.path"
              :key="item.title"
              :append-icon= item.icon
          >
          {{item.title }}
          </v-btn>
          <v-btn
          append-icon="mdi-logout"
          @click="logoutAction">Logout</v-btn>
      </v-toolbar-items>
    </div>
    <div v-else>
      <v-toolbar-items variant="plain" class="toolbar-items">
        <v-btn
            v-for="item in menuItems"
            :to = "item.path"
            :key="item.title"
            :append-icon= item.icon
        >
        {{item.title }}
        </v-btn>
     </v-toolbar-items>
    </div>
  </v-toolbar>


</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
    computed: {
        ...mapGetters('authModule', ['authenticated', 'searchText']),
        searchText: {
          get() {
            return this.$store.state.searchText;
          },
          set(value) {
            this.updateSearchText(value);
          }
       }
      },
    methods: {
      ...mapActions('authModule', ['logout','updateSearchText']),
      logoutAction(){
        this.$router.push('/');
        this.logout();
      },
      updateSearch(value) {
        this.updateSearchText(value);     },
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