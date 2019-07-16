<template>
  <div id="app">
  <label>Multi Select</label>
    		<vue-taggable-select
        style="margin-bottom: 2rem"
        placeholder="Choose some fruit"
		    v-model="fruit" 
		    :options="['apple','cherry','banana','pear', 'tomato']"
		></vue-taggable-select>

      <label>Taggable Multi Select</label>
    		<vue-taggable-select
        placeholder="Add some fruit"
		    v-model="fruit" 
        :taggable="true"
		    :options="['apple','cherry','banana','pear', 'tomato']"
		></vue-taggable-select>
  </div>
</template>

<script>
import VueTaggableSelect from "./components/VueTaggableSelect.vue";

export default {
  name: "App",
  data() { 
    return {
      fruit:null
    }
  },
  components: {
    VueTaggableSelect
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
