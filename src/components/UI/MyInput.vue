<template>
  <div class="inp_wrapper">
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      :type="show ? 'text' : type"
      placeholder=" "
    />
    <label>{{ labelText }}</label>
    <i
      v-if="type === 'password'"
      class="far icon"
      :class="show ? 'fa-eye-slash' : 'fa-eye'"
      @click.stop="togglePassword"
    />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    labelText: String,
    value: String,
    type: {
      type: String,
      default: "text",
    },
  },
  data: () => ({
    show: false,
  }),
  methods: {
    togglePassword() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.inp_wrapper {
  padding: 15px 0;
  position: relative;
  display: block;
}

.inp_wrapper label {
  position: absolute;
  top: 15px;
  left: 0px;
  transition: transform 0.3s ease-in-out;
}
.inp_wrapper input {
  color: white;
  width: 100%;
  border: 0;
  border-bottom: 2px solid white;
  background-color: transparent;
  padding: 5px;
  font-size: 1.2rem;
}
.inp_wrapper input:focus {
  outline: none;
  border-bottom: 2px solid #42b983;
}
.icon {
  position: absolute;
  top: 20px;
  right: 10px;
}
.inp_wrapper input:focus + label {
  color: #42b983;
  transform: translateY(-20px);
  font-size: 0.9rem;
}
.inp_wrapper input:not(:placeholder-shown) + label {
  transform: translateY(-15px);
  font-size: 0.9rem;
}
</style>
