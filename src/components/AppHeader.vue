    <script>
        import { store } from '../store.js';
        import { searchMovies } from '../api.js';

        export default {
            setup() {
                return { store };
            },
            methods: {
                search() {
                    if (store.searchQuery) {
                        searchMovies(store.searchQuery);
                    }
                }
            }
        };
</script>

<template>
    <header>
        <input type="text" v-model="store.searchQuery" @keyup.enter="search" placeholder="Cerca un film">
        <button @click="search">Cerca</button>
    </header>
</template>

<style scoped></style>
