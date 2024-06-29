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
        // wishList: (state) => {
        //   return state.currentUser ? state.currentUser.wishList : [];
        // },  
        currentUserEmail: (state) =>{
          return state.currentUser ? state.currentUser.email : null;
        },
        firstName: (state) =>{
          return state.currentUser ? state.currentUser.firstName : null;
        },
        lastName: (state) =>{
          return state.currentUser ? state.currentUser.lastName : null;
        },
      },
      mutations: {

        SET_AUTHENTICATED(state, {value }) {
          state.authenticated = value;
        },
        // ADD_TO_WISH_LIST(state, vinyl) {
        //   state.currentUser.wishList.push(vinyl);
        // },
        // setWishList(state, updatedCollection) {
        //   state.currentUser.wishList = updatedCollection;
        // },
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
        CLEAR_USER(state) {
          state.currentUser = null;
        },
      },
      actions: {
        async login({ commit, state }, { email, password }) {
          //try {
            // const response = await fetch('http://localhost:8000/login', { //post e utilizata pt a trimite emailul si parola catre server
            //   mode: 'cors',
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ email, password }),
            // });
            //if (response.ok) {
            //   const responseData = await response.json();
            //   const { validAuthorization, wishList, firstName, lastName } = responseData;
            //   localStorage.setItem("token",validAuthorization);
              commit('SET_USER', { email: 'ddd@yahoo.com', authenticated:true, accessToken: 'my_static_access_token', firstName: 'ddd', lastName: 'ddd'}); 
              commit('SET_AUTHENTICATED', {value: true});
          // } else {
              commit('SET_AUTHENTICATED', {value: false});
          // }
          // } catch (error) {
          //   console.error('Error', error);
          //   commit('SET_AUTHENTICATED', {value: false});
          //   throw error;
          // }
        },
        logout({ state, commit}) {
          commit('SET_AUTHENTICATED', false); 
          commit('CLEAR_USER', null); 
          localStorage.clear();
        },
      },
  };
     export default authModule;