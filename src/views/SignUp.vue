<template>
  <div class="signUp_wrapper">
    <div class="form_wrapper">
      <h1>Sign Up</h1>
      <MyInput v-model="user.fullName" labelText="Full Name*" class="myInput" />
      <MyInput v-model="user.username" labelText="Username*" class="myInput" />
      <MyInput
        v-model="user.password"
        type="password"
        labelText="Password* (min 8 chars)"
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
import { v4 as uuidv4 } from "uuid";

export default {
  name: "SignUp",
  props: {
    users: Array,
  },
  components: { MyInput },
  data: () => ({
    user: {
      fullName: "",
      username: "",
      password: "",
    },
  }),

  methods: {
    createUser() {
      if (!(this.user.fullName && this.user.username && this.user.password))
        return alert("Something was left unfilled");
      else if (this.user.password.length < 8)
        return alert("Password length must be min 8 characters");
      else if (this.checkUsername(this.user.username))
        return alert("Please, select another username");

      const newUser = {
        ...this.user,
        comments: [],
        userId: uuidv4(),
      };
      this.$emit("addNewUser", newUser);
      alert("Account successfully created");
      this.$router.push("/signIn");
    },
    checkUsername(username) {
      return this.users.find((user) => user.username === username);
    },
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
