<template>
  <div class="userProfile_wrapper">
    <AllUsers :currentUser="currentUser" :users="users" />
    <router-view
      :user="currentUser"
      :users="users"
      @updateUser="$emit('updateUser', $event)"
    />
  </div>
</template>

<script>
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
