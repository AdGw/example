<template>
  <div id="app">
    <h1>Translator</h1>
    <h5>Powered by Vue.js</h5>
    <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
    <TranslateOutput v-text="translatedText"></TranslateOutput>
  </div>
</template>

<script>
import TranslateForm from "./components/TranslateForm";
import TranslateOutput from "./components/TranslateOutput";
export default {
  name: "App",
  components: {
    TranslateForm,
    TranslateOutput
  },
  data: function() {
    return {
      translatedText: ""
    };
  },
  methods: {
    translateText: function(text, language) {
      this.$http
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190115T114934Z.eacaed35194efee2.f853a351e04382ea66dd8d76823814165d590438&lang=" +
            language +
            "&text=" +
            text
        )
        .then(response => {
          console.log(response.body.text);
          this.translatedText = response.body.text[0];
        });
    }
  }
};
</script>

<style>
#app {
}
</style>
