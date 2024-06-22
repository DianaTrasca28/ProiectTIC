<template class="app">
  <v-app class="white">
  <menu-component></menu-component>
  </v-app>
</template>

<script>
  import MenuComponent from "./components/MenuComponent.vue"
  export default {
    name: "App",
    components: {MenuComponent}
  };
</script>

