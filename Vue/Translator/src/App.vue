<template>
  <div id="app">
    <h1>Translator</h1>
    <h5>Powered by Vue.js</h5>
    <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
  </div>
</template>

<script>
import TranlateForm from "./components/TranslateForm";
export default {
  name: "App",
  components: {
    TranlateForm
  },
  methods: {
    translateText: function(text) {}
  }
};
</script>

<style>
#app {
}
</style>
