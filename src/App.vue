<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">My profile</router-link> |
      <router-link to="/signUp">Sign Up</router-link>
    </div> -->
    <router-view
      :users="users"
      :currentUser="getCurrentUser()"
      @addNewUser="addNewUserHandler"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    users: [
      {
        userId: "userId_12345",
        fullName: "Dayana Ismailova",
        username: "anakharsis9",
        password: "1234",
        comments: [
          {
            commentId: "commentId_12335",
            author: "userId_123452",
            text: "You gay? Laboriosam, hic deleniti similique adipisci provident unde nihil explicabo sunt ad incidunt quae, inventore recusandae quod delectus eligendi nulla ut! Fuga, quibusdam?",
            date: "17/02/22 at 13:25",
          },
          {
            commentId: "commentId_123356",
            author: "userId_123452",
            text: "You gay? Laboriosam, hic deleniti similique adipisci ?",
            date: "13/02/22 at 13:25",
          },
        ],
      },
      {
        userId: "userId_123452",
        fullName: "Ansar Ryspekov",
        username: "raydarar",
        password: "1234",
        comments: [],
      },
      {
        userId: "userId_1234525",
        fullName: "Nikita Golovenko",
        username: "nikitka",
        password: "1234",
        comments: [
          {
            commentId: "commentId_1233536",
            author: "userId_12345",
            text: "You gay? Laboriosam, hic deleniti similique adipisci ?",
            date: "13/02/22 at 13:25",
          },
        ],
      },
    ],
  }),
  created() {},
  methods: {
    addNewUserHandler(newUser) {
      this.users.push(newUser);
    },
    getCurrentUser() {
      const userId = localStorage.getItem("token");
      return this.users.find((user) => user.userId === userId);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a {
  color: #42b983;
}

.btn {
  height: 45px;
  border: 0;
  border-radius: 5px;
  font-size: 1.1rem;
}

.btn_main {
  background-color: #1b975f;
  color: white;
}
.btn_main:hover {
  background-color: #146b44;
  color: white;
}
</style>
