<template>
  <div class="comment_wrapper">
    <div class="meta_info">
      <h4>{{ authorFullname }}</h4>
      <span class="date">{{ comment.date }}</span>
    </div>

    <div class="text_box">
      <p class="text">
        {{ comment.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: Object,
    users: Array,
  },
  computed: {
    authorFullname() {
      const { fullName } = this.users.find(
        (user) => user.userId === this.comment.author
      );
      return fullName;
    },
  },
};
</script>

<style scoped>
.comment_wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
}

.meta_info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.date {
  font-size: 0.9rem;
  color: rgb(129, 129, 129);
}
.text {
  text-align: start;
}
</style>
