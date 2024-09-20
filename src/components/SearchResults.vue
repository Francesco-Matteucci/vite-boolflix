<script>
    import { store } from '../store.js';

    export default {
        setup() {
            return { store };
        }
    };
</script>

<template>
    <div class="results">
        <div v-for="movie in store.movies" :key="movie.id" class="movie-card">
            <h3>Titolo: {{ movie.title }}</h3>
            <p>Titolo originale: {{ movie.original_title }}</p>
            <p>Lingua: {{ movie.original_language }}</p>
            <p>Vote: {{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped></style>