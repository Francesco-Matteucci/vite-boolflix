<script>
    import fallbackImage from '../../assets/img/copertina-non-disponibile.jpg';

    export default {
        props: {
            movie: {
                type: Object,
                required: true
            },
            imageBaseURL: {
                type: String,
                default: 'https://image.tmdb.org/t/p/w342'
            }
        },
        methods: {
            // Metodo per trasformare il voto da 1 a 10 ad un voto da 1 a 5, arrotondando all'intero più vicino (minore o maggiore)
            getStars(vote) {
                const stars = Math.round(vote / 2);
                return stars;
            },

            // Metodo per ottenere l'URL della bandiera nei casi speciali dove il prefisso cambia
            getFlag(languageCode) {
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
        },
        computed: {
            moviePoster() {
                return this.movie.poster_path ? `${this.imageBaseURL}${this.movie.poster_path}` : fallbackImage;
            },
            movieType() {
                return this.movie.title ? 'Film' : 'Serie TV';
            }
        }
    };
</script>

<template>
    <div class="movie-card">

        <div class="movie-card-front d-flex justify-content-center align-items-center">
            <img :src="moviePoster" alt="Copertina" class="movie-poster img-fluid" />
        </div>

        <div class="movie-card-back d-flex flex-column justify-content-center align-items-center text-center">
            <h6>{{ movie.title || movie.name }}</h6>
            <small class="mb-2">{{ movie.original_title || movie.original_name }}</small>
            <p>{{ movieType }}</p>
            <p>
                <strong>Lingua: </strong>
                <img :src="getFlag(movie.original_language)" alt="flag" />
            </p>
            <div class="stars">
                <i v-for="n in 5" :class="n <= getStars(movie.vote_average) ? 'bi bi-star-fill' : 'bi bi-star'"
                    :key="n"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .movie-card {
        position: relative;
        width: 100%;
        height: 300px;
        perspective: 1000px;
    }

    .movie-card-front,
    .movie-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
        backface-visibility: hidden;
        transition: transform 0.9s ease;
        border-radius: 8px;
    }

    .movie-card-back {
        background-color: #333;
        color: white;
        padding: 10px;
        transform: rotateY(180deg);
    }

    .movie-card:hover .movie-card-front {
        transform: rotateY(180deg);
    }

    .movie-card:hover .movie-card-back {
        transform: rotateY(0deg);
    }

    .movie-poster {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }

    .stars {
        color: gold;
    }
</style>