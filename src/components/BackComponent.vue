<template>
    <v-container>
        <v-btn
        class="ma-2, gradient-toolbar"
        @click="goBack"
      >
        <v-icon
          icon="mdi-arrow-left"
          start
        ></v-icon>
            Back
      </v-btn>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackButton',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
});
</script>
<style scoped>
.gradient-toolbar {
  background-image: linear-gradient(to top, #ffbbe4, #f9c3ee, #f2caf5, #ecd1fb, #e7d8ff);
  color:gray;
}
</style>





