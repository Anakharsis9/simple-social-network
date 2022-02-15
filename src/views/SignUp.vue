<template>
  <div class="signUp_wrapper">
    <div class="form_wrapper">
      <h1>Sign Up</h1>
      <MyInput v-model="user.fullName" labelText="Full Name" class="myInput" />
      <MyInput v-model="user.username" labelText="Username" class="myInput" />
      <MyInput
        v-model="user.password"
        type="password"
        labelText="Password"
        class="myInput"
      />

      <button @click="createUser" class="btn btn_main">Create account</button>
      <span class="text">
        Already have an account?
        <router-link to="/signIn">Sign In</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";

export default {
  name: "SignUp",
  components: { MyInput },
  data: () => ({
    user: {
      fullName: "",
      username: "",
      password: "",
    },
  }),
  methods: {
    createUser() {},
  },
};
</script>

<style scoped>
.signUp_wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #42b983;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.form_wrapper {
  width: 400px;
  background-color: #2c3e50;
  padding: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

.form_wrapper h1 {
  margin-bottom: 1.1rem;
}

.myInput {
  margin-bottom: 0.9rem;
}
button {
  margin-bottom: 0.8rem;
}
.text {
  margin: 0.9rem 0;
}
</style>
