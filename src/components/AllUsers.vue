<template>
  <div class="allUsers_wrapper">
    <h2 class="header">All users</h2>
    <div class="container">
      <div class="search_wrapper">
        <input v-model="searchUser" class="search_input" type="text" />
        <button class="btn btn_main search_btn">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <ul class="list">
        <li
          @click="$router.push({ path: `/friend/${user.userId}` })"
          v-for="user in allUsers"
          :key="user.userId"
          class="list_item"
        >
          {{ user.fullName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllUsers",
  props: {
    currentUser: Object,
    users: Array,
  },
  components: {},
  data: () => ({
    searchUser: "",
  }),
  computed: {
    allUsers() {
      let searchUserText = this.searchUser.toLowerCase();
      return this.users.filter(
        (user) =>
          user.userId !== this.currentUser.userId &&
          user.fullName.toLowerCase().includes(searchUserText)
      );
    },
  },
  methods: {},
};
</script>

<style scoped>
.allUsers_wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  margin-top: 30px;
}
.search_wrapper {
  margin-top: 40px;
  display: flex;
}

.search_input {
  font-size: 1.1rem;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #969696;
  border-radius: 5px 0px 0px 5px;
}

.search_input:focus {
  outline: none;
  border: 1px solid #42b983;
}

.search_btn {
  height: 30px;
  width: 40px;
  border-radius: 0px 5px 5px 0px;
}

.list {
  list-style: none;
  margin-top: 40px;
  font-size: 1.2rem;
}
.list_item {
  margin-bottom: 15px;
}
.list_item:hover {
  color: #329669;
  cursor: pointer;
}
</style>
