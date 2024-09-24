<script>
    import fallbackImage from '../../assets/img/copertina-non-disponibile.jpg';

    export default {
        props: {
            movie: {
                type: Object,
                required: true
            },
            cast: {
                type: Array,
                default: () => []
            },
            genres: {
                type: String,
                default: ''
            },
            imageBaseURL: {
                type: String,
                default: 'https://image.tmdb.org/t/p/w342'
            }
        },
        computed: {
            moviePoster() {
                return this.movie.poster_path ? `${this.imageBaseURL}${this.movie.poster_path}` : fallbackImage;
            },
            movieType() {
                return this.movie.title ? 'Film' : 'Serie TV';
            }
        },
        methods: {
            getStars(vote) {
                return Math.round(vote / 2);
            },
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
        }
    };
</script>

<template>
    <div class="movie-card">

        <div class="movie-card-image">
            <img :src="moviePoster" alt="Copertina" class="movie-poster img-fluid" />
        </div>

        <div class="movie-info-overlay">
            <h6>{{ movie.title || movie.name }}</h6>
            <small>{{ movie.original_title || movie.original_name }}</small>
            <p>{{ movieType }}</p>
            <div class="stars mb-2">
                <i v-for="n in 5" :class="n <= getStars(movie.vote_average) ? 'bi bi-star-fill' : 'bi bi-star'"
                    :key="n"></i>
            </div>
            <p>Lingua: <img :src="getFlag(movie.original_language)" alt="flag" />
            </p>
            <p v-if="cast && cast.length">Cast: {{ cast.join(', ') }}</p>
            <p v-if="genres">Generi: {{ genres }}</p>
        </div>
    </div>
</template>

<style scoped>

    .movie-card {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 8px;
    }


    .movie-card-image {
        width: 100%;
        height: 100%;
    }

    .movie-poster {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
    }

    .movie-info-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        padding: 10px;
        font-size: 0.8rem;
    }

    .movie-card:hover .movie-poster {
        filter: brightness(0.5);
    }

    .movie-card:hover .movie-info-overlay {
        opacity: 1;
    }

</style>
