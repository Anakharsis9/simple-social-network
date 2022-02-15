<template>
  <div class="signIn_wrapper">
    <div class="form_wrapper">
      <h1>Sign In</h1>
      <MyInput
        v-model="userToken.username"
        labelText="Username"
        class="myInput"
      />
      <MyInput
        v-model="userToken.password"
        type="password"
        labelText="Password"
        class="myInput"
      />
      <button @click="login" class="btn btn_main">Login</button>

      <span class="text">
        Don't you have an account?
        <router-link to="/signUp">Sign Up</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";

export default {
  name: "SignIn",
  props: {
    users: Array,
  },
  components: {
    MyInput,
  },
  data: () => ({
    userToken: {
      username: "",
      password: "",
    },
  }),
  methods: {
    login() {
      if (!(this.userToken.username && this.userToken.password))
        return alert("Fill in the empty fields");
      else if (!this.checkUser(this.userToken))
        return alert(
          "One of the fields is entered incorrectly or there is no such user"
        );
      const { userId } = this.checkUser(this.userToken);

      localStorage.setItem("token", userId);
      this.$router.push({ name: "UserProfile", params: { id: userId } });
    },
    checkUser(userToken) {
      return this.users.find(
        (user) =>
          user.username === userToken.username &&
          user.password === userToken.password
      );
    },
  },
};
</script>

<style scoped>
.signIn_wrapper {
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
