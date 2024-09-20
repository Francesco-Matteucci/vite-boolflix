    <script>
        import { store } from '../store.js';
        import { searchMovies, searchTVSeries } from '../api.js';

        export default {
            setup() {
                return {
                    store
                };
            },
            methods: {
                search() {
                    if (store.searchQuery) {
                        searchMovies(store.searchQuery);
                        searchTVSeries(store.searchQuery);
                    }
                }
            }
        };
</script>

<template>
    <header class="d-flex justify-content-between align-items-center p-3 bg-dark text-white">

        <div class="logo">
            <h1>BOOLFLIX</h1>
        </div>

        <div class="search-bar d-flex">
            <input type="text" v-model="store.searchQuery" @keyup.enter="search" class="form-control me-2"
                placeholder="Cerca un film o una serie TV">
            <button @click="search" class="btn btn-danger">Cerca</button>
        </div>
    </header>
</template>

<style scoped>
    .logo h1 {
        font-size: 24px;
        color: red;
        margin: 0;
    }
</style>
