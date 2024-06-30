<template>
  <div>
    <MenuComponent />
    <FilterComponent />
    <PerfumesList></PerfumesList>
  </div>
</template>
  
  <script>
  import MenuComponent from "@/components/MenuComponent.vue";
  import FilterComponent from "@/components/FilterComponent.vue";
  import PerfumesList from "@/components/PerfumesList.vue";

  export default {
    name: "HomeLayout",
    components: { MenuComponent, FilterComponent, PerfumesList },
  };
  </script>