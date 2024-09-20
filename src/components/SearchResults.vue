<script>
    import { store } from '../store.js';

    // Creo una funzione per ottenere l'URL della bandiera nei casi speciali dove il prefisso cambia
    function getFlag(languageCode) {
        const specialFlags = {
            en: 'gb',
            pt: 'br',
            zh: 'cn',
            ja: 'jp',
            ko: 'kr'

        };

        const countryCode = specialFlags[languageCode] || languageCode;
        return `https://flagcdn.com/w40/${countryCode}.png`;
    }

    export default {
        setup() {
            return {
                store,
                getFlag
            };
        }
    };
</script>

<template>
    <div class="results">
        <div v-for="movie in store.movies" :key="movie.id" class="movie-card">
            <h3>{{ movie.title || movie.name }}</h3>
            <p><strong>Tipo: </strong>{{ movie.title ? 'Film' : 'Serie TV' }}</p>
            <p><strong>Titolo originale: </strong> {{ movie.original_title || movie.original_name }}</p>
            <p><strong>Lingua: </strong>
                <img :src="getFlag(movie.original_language)" alt="flag" />
            </p>
            <p><strong>Voto: </strong>{{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    img {
        margin: 0 5px;
        border-radius: 4px;
        border: 1px solid #000;

        &:hover {
            scale: 1.05;
        }
    }
</style>