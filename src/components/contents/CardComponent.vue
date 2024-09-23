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
        computed: {
            moviePoster() {
                return this.movie.poster_path ? `${this.imageBaseURL}${this.movie.poster_path}` : fallbackImage;
            }
        }
    };
</script>

<template>
    <div class="movie-card">
        <img :src="moviePoster" alt="Copertina" class="movie-poster img-fluid" />
    </div>
</template>

<style scoped>
    .movie-card {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .movie-poster {
        width: 100%;
        height: auto;
        max-height: 300px;
        object-fit: cover;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }
</style>
