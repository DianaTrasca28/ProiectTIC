<template>
    <v-container class="d-flex  justify-md-left">
        <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          color="grey-lighten-3"
          v-bind="props"
          style="margin-left: 50px;"
          append-icon="mdi-filter-menu-outline"

        >
          Filter
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


</template>

<script>
export default{
    data(){
        return {
          itemsNote: [
        { title: 'Vanilie' },
        { title: 'Fructate' },
        { title: 'Florale' },
        { title: 'Animalice' },
        {title: 'Gurmande'}
      ],
        }
    },
}
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
}

</style>