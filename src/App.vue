<script>
  import AppHeader from './components/header/AppHeader.vue';
  import MediaSection from './components/contents/MediaSection.vue';

  export default {
    components: {
      AppHeader,
      MediaSection
    }
  };
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AppHeader />
    <main class="content flex-grow-1 overflow-auto">
      <MediaSection />
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
