<script>
  import AppHeader from './components/header/AppHeader.vue';
  import SearchResults from './components/contents/SearchResults.vue';

  export default {
    components: {
      AppHeader,
      SearchResults
    }
  };
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AppHeader />
    <main class="content flex-grow-1 overflow-auto">
      <SearchResults />
    </main>
  </div>
</template>

<style scoped>
  #app {
    background-color: #141414;
  }

  .content {
    padding: 40px;
  }
</style>
