<template>
  <div class="allUsers_wrapper">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, hic
      deleniti similique adipisci provident unde nihil explicabo sunt ad
      incidunt quae, inventore recusandae quod delectus eligendi nulla ut! Fuga,
      quibusdam?
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "AllUsers",
  props: {
    currentUser: Object,
    users: Array,
  },
  components: {},
};
</script>

<style scoped>
.allUsers_wrapper {
  width: 100%;
}
</style>
