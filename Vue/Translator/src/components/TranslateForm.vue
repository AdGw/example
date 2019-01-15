<template>
  <div id="translateForm">TranslateForm
    <form v-on:submit="formSubmit">
      <input type="text" v-model="textToTranslate" placeholder="enter a word">
      <select v-model="language">
        <option value="ru">Russian</option>
        <option value="pl">Polish</option>
        <option value="de">German</option>
        <option value="es">Spanish</option>
      </select>
      <input type="submit" value="Translate">
    </form>
  </div>
</template>

<script>
export default {
  name: "translateForm",
  data() {
    return {
      textToTranslate: "",
      language: ""
    };
  },
  created() {
    this.language = "pl";
  },
  methods: {
    formSubmit(e) {
      this.$emit("formSubmit", this.textToTranslate, this.language);
      e.preventDefault();
    }
  }
};
</script>

<style>
#app {
}
</style>
