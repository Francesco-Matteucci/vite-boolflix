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
    };

    function getStars(vote) {
        // Trasformo il voto da 1 a 10 ad un voto da 1 a 5, arrotondando all'intero più vicino (minore o maggiore)
        const stars = Math.round(vote / 2);
        return stars;
    }


    // Link url base per le immagini di copertina
    const imageBaseURL = 'https://image.tmdb.org/t/p/w342';

    export default {
        setup() {
            return {
                store,
                getFlag,
                imageBaseURL,
                getStars
            };
        }
    };
</script>

<template>
    <div class="results">
        <div v-for="movie in store.movies" :key="movie.id" class="movie-card">
            <h3>{{ movie.title || movie.name }}</h3>
            <img :src="`${imageBaseURL}${movie.poster_path}`" alt="Copertina" class="movie-poster"
                v-if="movie.poster_path" />
            <p><strong>Tipo: </strong>{{ movie.title ? 'Film' : 'Serie TV' }}</p>
            <p><strong>Titolo originale: </strong> {{ movie.original_title || movie.original_name }}</p>
            <p><strong>Lingua: </strong>
                <img :src="getFlag(movie.original_language)" alt="flag" />
            </p>
            <div class="stars">
                <i v-for="n in 5"
                    :class="n <= getStars(movie.vote_average) ? 'bi bi-star-fill star-icon' : 'bi bi-star star-icon'"
                    :key="n"></i>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    img.movie-poster {
        width: 100px;
        border-radius: 4px;
        border: 1px solid #000;
        margin: 5px;
    }

    p img {
        margin: 0 5px;
        border-radius: 4px;
        border: 1px solid #000;

        &:hover {
            scale: 1.05;
        }
    }

    .star-icon {
        color: gold;
        padding: 2px;

    }
</style>