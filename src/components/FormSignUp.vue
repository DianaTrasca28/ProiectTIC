<template>
    <div>
      <MenuComponent/>
      <BackComponent/>
    <v-container style="display: flex; justify-content: center; align-items: center; padding-top: 4rem;">
      <v-card style = "width: 400px; max-width: 400px;">
      <v-row justify="center">
        <v-col sm="8" md="6" lg="10">
          <v-card-title style="text-align: center; font-family: 'Courier New', Courier, monospace">Sign Up</v-card-title>
          <v-form ref="userForm" @submit.prevent="registerUser">
            <v-text-field
              v-model="firstName"
              label="First Name"
              variant="solo"
              :rules="[rules.required]"
              :error-messages="firstNameErrors"
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              label="Last Name"
              :rules="[rules.required]"
              :error-messages="lastNameErrors"
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="Email"
              variant="solo"
              :rules="[rules.required, rules.email]"
              :error-messages="emailErrors"
            ></v-text-field>
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
              :rules="[rules.required, rules.minPasswordLength]"
              :type="show ? 'text' : 'password'"
              label="Password"
              variant="solo"
              placeholder="Enter your password" 
              :error-messages="passwordErrors"
              counter
              @click:append="show = !show"
            ></v-text-field>
            <v-text-field
              v-model="confirmPassword"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              label="Confirm Password"
              variant="solo"
              :rules="[rules.required, rules.passwordMatch]"
              :error-messages="confirmPasswordErrors"
              @click:append="show2 = !show2"
            ></v-text-field>
            <v-checkbox
              v-model="terms"
              required
              :rules="[rules.required]" 
              color="secondary"
              label="I agree to site terms and conditions"
            ></v-checkbox>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn  color="blue" size="large" variant="tonal" type="submit">
                Register
                <v-icon icon="mdi-chevron-right" end></v-icon>
              </v-btn>
            </v-card-actions>
          </v-form>
          <v-container>
            <v-text>Already have an account? </v-text>
            <router-link :to="'/login'">Log-in</router-link>
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
export default {
  data() {
    return {
      errorMessage: null,
      show: false,
      show2: false,
      terms: false,
      firstName: '',
      lastName: '',
      email: '',
      username:'',
      password: '',
      confirmPassword: '',
      firstNameErrors: [],
      lastNameErrors: [],
      emailErrors: [],
      usernameErrors:[],
      passwordErrors: [],
      confirmPasswordErrors: [],
      rules: {
        required: (value) => !!value || 'Field is required',
        email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
        },
        minUsernameLength: (value) => (value && value.length >= 3) || 'Username must be at least 3 characters long',
        minPasswordLength: (value) => (value && value.length >= 8) || 'Password must be at least 8 characters long',
        passwordMatch: (value) => value === this.password || 'Passwords do not match'
      }
    };
  },
  methods: {
    async registerUser() {
      const { valid } = await this.$refs.userForm.validate()
      if (!valid) {
        return; 
      }
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordErrors.push('Passwords do not match');
        return;
      }

      try {
    const response = await fetch('http://localhost:8000/api/users/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.email,
            username: this.username,
            password: this.password,
        }),
    });
    
    if (response.ok) {
        console.log('User registered successfully!');
        this.$router.push('/login');
    } else {
        console.error('Registration error');
        this.errorMessage = 'There is already an account with the specified email address.';
    }
} catch (error) {
    console.error('Error: ', error);
    this.errorMessage = 'An error occurred during registration.';
}
    }
  }
}
</script>
<style>
.error-message {
  color: red;
  font-weight: bold;
  margin-top: 5px;
}
</style>
