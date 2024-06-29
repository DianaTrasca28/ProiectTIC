/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import store from './store/index';
const app = createApp(App)
app.use(store)

registerPlugins(app)
store.watch(
    (state) => state,
    (newState) => {
      localStorage.setItem("state", JSON.stringify(newState));
    },
    { deep: true }
  );
app.mount('#app')
