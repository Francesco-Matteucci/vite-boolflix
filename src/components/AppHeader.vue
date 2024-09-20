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
    <header>
        <input type="text" v-model="store.searchQuery" @keyup.enter="search" placeholder="Cerca un film o una serie TV">
        <button @click="search">Cerca</button>
    </header>
</template>

<style scoped></style>
