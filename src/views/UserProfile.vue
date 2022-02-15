<template>
  <div class="userProfile_wrapper">
    <AllUsers />
    <router-view :user="currentUser" :users="users" />
  </div>
</template>

<script>
// @ is an alias to /src
import AllUsers from "@/components/AllUsers.vue";

export default {
  name: "UserProfile",
  props: {
    currentUser: Object,
    users: Array,
  },
  components: { AllUsers },
};
</script>

<style scoped>
.userProfile_wrapper {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
  
}
</style>
