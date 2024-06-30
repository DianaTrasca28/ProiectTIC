import { createStore } from 'vuex';
import authModule from './modules/authModule';

const store = createStore({
  modules: {
    authModule}
});
if(localStorage.getItem("state")){
  const state = JSON.parse(localStorage.getItem("state"));
  store.replaceState(state)
}

export default store;