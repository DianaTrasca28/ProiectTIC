<template>
    <v-container class="d-flex  justify-md-left">
        <v-menu :value="true">
      <template v-slot:activator="{ props }">
        <v-btn
          color="grey-lighten-3"
          v-bind="props"
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
          <v-list-item-action>
            <v-checkbox
              v-model="item.checked"
              :label="item.title"
              :value="item.title"
            ></v-checkbox>
          </v-list-item-action>
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
          { title: 'Vanilie', checked: false },
          { title: 'Fructate', checked: false },
          { title: 'Florale', checked: false },
          { title: 'Animalice', checked: false },
          { title: 'Gurmande', checked: false }
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