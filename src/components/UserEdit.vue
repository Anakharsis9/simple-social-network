<template>
  <div class="userEdit_wrapper">
    <div class="edit_wrapper">
      <h1 class="header">Edit Page</h1>
      <div class="inputs">
        <div class="myInp_wrapper">
          <MyInput v-model="newFullname" labelText="Full Name" />
        </div>
        <div class="myInp_wrapper">
          <MyInput v-model="newUsername" labelText="Username" />
        </div>
        <div class="myInp_wrapper">
          <MyInput v-model="newPassword" labelText="New Password" />
        </div>
      </div>
      <div class="btns">
        <button @click="updateUser" class="btn btn_main">Save</button>
        <button @click="$router.back()" class="btn">Exit edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";

export default {
  name: "UserEdit",
  props: {
    user: Object,
    users: Array,
  },
  components: { MyInput },
  data: () => ({
    newFullname: "",
    newUsername: "",
    newPassword: "",
  }),
  methods: {
    updateUser() {
      if (this.newFullname) this.user.fullName = this.newFullname;

      if (this.newUsername) {
        if (this.checkUsername(this.newUsername))
          return alert("Please, select another username");
        this.user.username = this.newUsername;
      }

      if (this.newPassword) {
        if (this.newPassword.length < 8)
          return alert("Password length must be min 8 characters");
        this.user.password = this.newPassword;
      }

      this.$router.push(`/${this.user.userId}`);
    },
    checkUsername(username) {
      return this.users.find((user) => user.username === username);
    },
  },
};
</script>

<style scoped>
.userEdit_wrapper {
  background-color: #42b983;
  padding: 20px;
}

.edit_wrapper {
  height: 100%;
  border-radius: 5px;
  background-color: white;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  margin-top: 10px;
  margin-bottom: 40px;
}
.inputs {
  display: grid;
  row-gap: 15px;
  justify-content: center;
}

.myInp_wrapper {
  width: 300px;
  border-radius: 5px;
  padding: 15px 20px;
  background-color: rgb(195, 207, 211);
}

.btns {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}

button {
  width: 100px;
}
</style>
