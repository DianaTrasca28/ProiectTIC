<template>
<v-app-bar height="130" floating scroll-behavior="hide" elevation="5">
<v-container fluid class="pa-0">
  <v-toolbar  dense color="pink-lighten-4">

      <!-- Link si titlu pagina -->
      <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer; color: black; text-decoration: none; font-family: 'Courier New', Courier, monospace, sans-serif; font-size: 1.7rem;">
        {{ appTitle }}
      </router-link>
      </v-toolbar-title>

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
            <v-btn
            append-icon="mdi-logout"
            @click="logoutAction">Logout</v-btn>
        </v-toolbar-items>
  </v-toolbar>
<v-divider thickness="2.5" color="gray" opacity="0.5"></v-divider>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          color="black"
          v-bind="props"
        >
          Filtru
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in itemsNote"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-container>
  </v-app-bar>

</template>

<script>
export default {
    data(){
        return {
        appTitle: 'Parfumuri de nișă',
        menuItems: [
            { title: 'Home', path: '/', icon: 'mdi-home' },
            { title: 'Sign Up', path: '/signup', icon: 'mdi-account' },
        ],
        menuItemsLogIn: [
            { title: 'Home', path: '/', icon: 'mdi-home' },
            { title: 'Wish List', path: '/wishlist', icon:'mdi-heart' },
            { title: 'My Account', path: '/myaccount', icon:'mdi-account-circle' }
        ],
        itemsNote: [
        { title: 'Vanilie' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
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
  .v-container {
    max-width: 100%;
  }
  
  .toolbar-items {
  display: flex;
  flex-direction: row; 
  justify-content: flex-end; 
}

@media only screen and (max-width: 600px) {
  .toolbar-items {
    flex-direction: column; 
    align-items: flex-end; 
  }
}
</style>