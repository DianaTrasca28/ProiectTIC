<template>
  <MenuComponent/>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="filteredPerfumes"
      :search="search"
      :sort-by="[{ key: 'name', order: 'asc' }]"
      style="margin-top: 20px;"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My wishlist</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
            class="search-field"
          ></v-text-field>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon size="small" @click="deletePerfume(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to delete this perfume?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="deletePerfumeConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import MenuComponent from "@/components/MenuComponent.vue";
</script>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { mapActions } from 'vuex';

export default {
  components: {
    MenuComponent
  },
  setup() {
    const headers = [
      { text: 'Name', value: 'name' },
      { text: 'Price', value: 'price' },
      { text: 'Notes', value: 'notes' },
      { text: 'Size', value: 'size' },
      { text: 'Actions', value: 'actions', sortable: false },
    ];

    const search = ref('');
    const dialogDelete = ref(false);
    const editedIndex = ref(-1);
    const store = useStore();

    const wishlist = computed(() => store.getters['authModule/wishlist']);
    const filteredPerfumes = computed(() => {
      if (!search.value) return wishlist.value;
      return wishlist.value.filter(perfume =>
        perfume.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    return {
      headers,
      search,
      dialogDelete,
      editedIndex,
      wishlist,
      filteredPerfumes,
      ...mapActions('authModule', ['removePerfumeFromWishlist'])
    };
  },
  methods: {
    deletePerfume(item) {
      this.editedIndex = this.wishlist.indexOf(item);
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    deletePerfumeConfirm() {
      this.removePerfumeFromWishlist(this.wishlist[this.editedIndex]);
      this.closeDelete();
    },
  },
};
</script>

<style scoped>
.search-field {
  max-width: 600px; 
}
</style>
