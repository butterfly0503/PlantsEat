<template>
  <input
    class="with-bg-input bg-blue-bglight ml-auto px-4 py-2.5 rounded-xl border border-blue-light"
    :id="placeholder"
    :placeholder="placeholder"
    v-model="inputVal"
  />
</template>
<script>

export default {
    name:'with-bg-input',
     components: {
    },
    props: {
        placeholder: String,
        value: [String, Number]
    },
   computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
}
</script>
<style scoped>
.border-blue-light {
  border-color: #8ba9d7;
  color: #8aa9d8;
}
.with-bg-input::placeholder {
  color: #8aa9d8;
}
</style>