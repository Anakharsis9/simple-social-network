<template>
  <div class="userInfo_wrapper">
    <div class="user_imgButtons info_wrap">
      <div class="img">
        <i class="fas fa-user"></i>
      </div>
      <div class="buttons">
        <button @click="editUser" class="btn btn_main">Edit</button>
        <button class="btn">Sign Out</button>
      </div>
    </div>
    <div class="container">
      <div class="user_textInfo info_wrap">
        <h1>{{ user.fullName }}</h1>
        <h4>{{ user.username }}</h4>
      </div>
      <div class="comments_wrapper">
        <h2 class="info_wrap">Comments</h2>
        <div class="comments">
          <Comment
            v-for="comment in user.comments"
            :key="comment.commentId"
            :comment="comment"
            :users="users"
            class="comment"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/UI/Comment.vue";

export default {
  name: "UserInfo",
  props: { user: Object, users: Array },
  components: { Comment },
  methods: {
    editUser() {
      this.$router.push(`/${this.user.userId}/userEdit`);
    },
  },
};
</script>

<style scoped>
.userInfo_wrapper {
  background-color: rgb(230, 236, 238);
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 20px;
}

.info_wrap {
  padding: 10px;
  border-radius: 5px;
  background-color: white;
}

.user_imgButtons {
  height: 320px;
}
.img {
  background-color: rgb(61, 151, 124);
  color: white;
  font-size: 5rem;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.buttons {
  display: grid;
  row-gap: 10px;
}

.container {
  padding: 0 20px;
}

.user_textInfo {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
h1 {
  margin-bottom: 10px;
}

.comments_wrapper {
  margin-top: 20px;
}
.comments {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.comment {
  margin-top: 10px;
}
</style>
