<template>
      <MenuComponent />
      <FilterComponent />
      <router-view></router-view>
      
</template>
  
  <script>
  import MenuComponent from "@/components/MenuComponent.vue";
  import FilterComponent from "@/components/FilterComponent.vue";
  
  export default {
    name: "HomeLayout",
    components: { MenuComponent, FilterComponent },
  };
  </script>