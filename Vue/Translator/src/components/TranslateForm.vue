<template>
  <div id="translateForm">TranslateForm
    <form v-on:submit="formSubmit">
      <input type="text" v-model="textToTranslate" placeholder="enter a word">
      <input type="submit" value="Translate">
    </form>
  </div>
</template>

<script>
export default {
  name: "translateForm",
  data() {
    return {
      textToTranslate: ""
    };
  },
  methods: {
    formSubmit(e) {
      this.$emit("formSubmit", this.textToTranslate);
      e.preventDefault();
    }
  }
};
</script>

<style>
#app {
}
</style>
