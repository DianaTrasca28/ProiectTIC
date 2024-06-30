<template>
<div>
    <MenuComponent/>
    <BackComponent/>        
    <v-container
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 4rem;
      "
    >
      <v-card style="width: 400px; max-width: 400px">
        <v-row justify="center">
          <v-col sm="8" md="6" lg="10">
            <v-card-title
              style="
                text-align: center;
                font-family: 'Courier New', Courier, monospace;
              "
              >Log In</v-card-title
            >
            <v-form ref="loginForm" @submit.prevent="loginUser">
              <v-text-field
              v-model="username"
                label="Username"
                variant="solo"
                :rules="[rules.required, rules.minUsernameLength]"
                :error-messages="usernameErrors"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required]"
                :type="show ? 'text' : 'password'"
                label="Password"
                variant="solo"
                placeholder="Enter your password"
                :error-messages="passwordErrors"
                counter
                @click:append="show = !show"
              ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue"
                  size="large"
                  variant="tonal"
                  type="submit"
                >
                  Log In
                  <v-icon icon="mdi-chevron-right" end></v-icon>
                </v-btn>
              </v-card-actions>
            </v-form>
            <v-container>
              <v-text>Don't have an account yet? </v-text>
              <router-link :to="'/signup'">Sign up</router-link>
            </v-container>
            <v-card-text v-if="errorMessage" class="error-message">{{ errorMessage }}</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
</div>
  </template>  
  <script setup>
  import MenuComponent from "@/components/MenuComponent.vue";
  import BackComponent from "./BackComponent.vue"; 
  </script>
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
      data() {
        return {
          errorMessage: null,
          show: false,
          username: '',
          password: '',
          usernameErrors: [],
          passwordErrors: [],
          rules: {
            required: value => !!value || 'Field is required',
            minUsernameLength: (value) => (value && value.length >= 3) || 'Username must be at least 3 characters long',
          },
        }
      },computed:{
        ...mapGetters('authModule', ['authenticated']),
      },
      methods: {
        ...mapActions('authModule', ['login']),
        async loginUser() {
          if (!this.$refs.loginForm.validate()) {
            return;
          }
  
          try {
            debugger
            await this.login({ username: this.username, password: this.password });
  
            if (this.authenticated) {
              console.log("User successfully authenticated!");
              this.$router.push('/');
            } else {
              console.error('Authentication failed!!!');
              this.errorMessage = "You have entered an invalid email or password";
            }
          } catch (error) {
            console.error('Error', error)
          }
        },
      },
    }
  </script>
  
  <style>
  .error-message {
    color: red;
    font-weight: bold;
    margin-top: 5px;
  }
  </style>
