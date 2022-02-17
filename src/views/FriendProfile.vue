<template>
  <div class="friendProfile_wrapper">
    <div class="backBtn_wrapper">
      <button @click="$router.back()" class="btn backBtn">
        <i class="fas fa-angle-left"></i>Back
      </button>
    </div>
    <div class="friendInfo_wrapper">
      <div class="user_imgButtons info_wrap">
        <div class="img">
          <i class="fas fa-user"></i>
        </div>
      </div>
      <div class="container">
        <div class="user_textInfo info_wrap">
          <h1>{{ pageOwner.fullName }}</h1>
          <h4>{{ pageOwner.username }}</h4>
        </div>
        <div class="comments_wrapper">
          <div class="info_wrap writeComment_wrapper">
            <h2>Comments</h2>
            <div class="textArea_wrapper">
              <textarea
                v-model="commentText"
                class="textArea"
                cols="30"
                rows="5"
                placeholder="Write your comment"
              ></textarea>
              <button @click="addComment" class="btn btn_main btn_comment">
                Add Comment
              </button>
            </div>
          </div>
          <div class="comments">
            <Comment
              v-for="comment in pageOwner.comments"
              :key="comment.commentId"
              :comment="comment"
              :users="users"
              class="comment"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import Comment from "@/components/UI/Comment.vue";

export default {
  name: "FriendProfile",
  props: {
    currentUser: Object,
    users: Array,
  },
  components: {
    Comment,
  },
  data: () => ({
    commentText: "",
  }),
  computed: {
    pageOwner() {
      return this.users.find(
        (user) => user.userId === this.$route.params.userId
      );
    },
  },
  methods: {
    addComment() {
      const date = new Date();
      const dateText = `${date.toLocaleDateString()} at ${date.toLocaleTimeString(
        undefined,
        { hour: "numeric", minute: "numeric" }
      )}`;

      this.$emit("addNewComment", {
        userId: this.pageOwner.userId,
        comment: {
          commentId: uuidv4(),
          author: this.currentUser.userId,
          text: this.commentText,
          date: dateText,
        },
      });

      this.commentText = "";
    },
  },
};
</script>

<style scoped>
.friendProfile_wrapper {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 20% 80%;
}

.backBtn_wrapper {
  padding: 40px;
}
.backBtn {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.backBtn i {
  margin-right: 10px;
}

.friendInfo_wrapper {
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: #42b983;
  padding: 20px;
}

.info_wrap {
  padding: 10px;
  border-radius: 5px;
  background-color: white;
}

.user_imgButtons {
  height: 200px;
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

.textArea_wrapper {
  margin-top: 20px;
  display: flex;
}
.textArea {
  width: 85%;
  padding: 10px;
  margin-right: 10px;
}
.textArea:focus {
  outline: none;
}

.btn_comment {
  width: 150px;
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
