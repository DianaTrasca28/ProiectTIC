const authModule = {
    namespaced: true,
    state: {
      currentUser: null,
    },
    getters: {
    
        authenticated: (state) => {
          return state.currentUser ? state.currentUser.authenticated : false;
        },
        accessToken: (state) => {
          return state.currentUser ? state.currentUser.accessToken : null;
        },
        wishList: (state) => {
          return state.currentUser ? state.currentUser.wishList : [];
        },  
        currentUserEmail: (state) =>{
          return state.currentUser ? state.currentUser.email : null;
        },
        firstName: (state) =>{
          return state.currentUser ? state.currentUser.firstName : null;
        },
        lastName: (state) =>{
          return state.currentUser ? state.currentUser.lastName : null;
        },
        username: (state) =>{
          return state.currentUser ? state.currentUser.username : null;
        },
        
      },
      mutations: {

        SET_AUTHENTICATED(state, {value }) {
          state.authenticated = value;
        },
        ADD_TO_WISH_LIST(state, parfum) {
          state.currentUser.wishList.push(parfum);
        },
        setWishList(state, updatedCollection) {
          state.currentUser.wishList = updatedCollection;
        },
        SET_USER(state, user) {
          state.currentUser = user;
        },
        SET_FIRST_NAME(state, firstName) {
          state.currentUser.firstName = firstName;
        },
        SET_LAST_NAME(state, lastName) {
          state.currentUser.lastName = lastName;
        },
        SET_EMAIL(state, email){
          state.currentUser.currentUserEmail = email;
        },
        SET_USERNAME(state, username){
          state.currentUser.currentUser.username = username;
        },
        CLEAR_USER(state) {
          state.currentUser = null;
        },
      },
      actions: {
        async login({ commit, state }, { username, password }) {
          try {
            const response = await fetch('http://localhost:8000/api/users/login', { 
              mode: 'cors',
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
              const responseData = await response.json();
              const { validAuthorization, wishList, firstName, lastName, username, email } = responseData;
              localStorage.setItem("token",validAuthorization);
              commit('SET_USER', { email: email, authenticated:true, accessToken: validAuthorization, wishList: wishList, firstName: firstName, lastName: lastName, username: username}); 
              commit('SET_AUTHENTICATED', {value: true});
          } else {
              commit('SET_AUTHENTICATED', {value: false});
          }
          } catch (error) {
            console.error('Error', error);
            commit('SET_AUTHENTICATED', {value: false});
            throw error;
          }
        },
        logout({ state, commit}) {
          commit('SET_AUTHENTICATED', false); 
          commit('CLEAR_USER', null); 
          localStorage.clear();
        },
      },
  };
     export default authModule;