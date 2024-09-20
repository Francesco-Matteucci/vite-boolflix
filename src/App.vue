<script>
  import AppHeader from './components/AppHeader.vue';
  import SearchResults from './components/SearchResults.vue';

  export default {
    components: {
      AppHeader,
      SearchResults
    }
  };
</script>

<template>
  <div id="app">
    <AppHeader />
    <SearchResults />
  </div>
</template>

<style scoped></style>
