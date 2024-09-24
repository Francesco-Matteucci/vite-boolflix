<script>
    import CarouselComponent from '../shared/CarouselComponent.vue';
    import { searchTopMovies, getActionMovies, getComedyMovies, getAnimationMovies, getMovieCredits, getMovieDetails } from '../../api.js';
    import { store } from '../../store.js';

    export default {
        components: {
            CarouselComponent
        },
        setup() {
            return {
                store
            };
        },
        data() {
            return {
                topMovies: [],
                actionMovies: [],
                comedyMovies: [],
                animationMovies: []
            };
        },
        created() {
            this.fetchTopMovies();
            this.fetchActionMovies();
            this.fetchComedyMovies();
            this.fetchAnimationMovies();
        },
        watch: {
            'store.movies': function (newMovies) {
                if (newMovies.length > 0) {
                    this.fetchAdditionalMovieData(newMovies);
                }
            }
        },
        methods: {
            fetchTopMovies() {
                searchTopMovies()
                    .then(movies => {
                        this.topMovies = movies;
                        this.fetchAdditionalMovieData(this.topMovies, true);
                    })
                    .catch(error => {
                        console.error('Errore nel caricamento dei film più visti:', error);
                    });
            },
            fetchActionMovies() {
                getActionMovies()
                    .then(movies => {
                        this.actionMovies = movies;
                        this.fetchAdditionalMovieData(this.actionMovies, true);
                    })
                    .catch(error => {
                        console.error('Errore nel caricamento dei film d\'azione:', error);
                    });
            },
            fetchComedyMovies() {
                getComedyMovies()
                    .then(movies => {
                        this.comedyMovies = movies;
                        this.fetchAdditionalMovieData(this.comedyMovies, true);
                    })
                    .catch(error => {
                        console.error('Errore nel caricamento delle commedie:', error);
                    });
            },
            fetchAnimationMovies() {
                getAnimationMovies()
                    .then(movies => {
                        this.animationMovies = movies;
                        this.fetchAdditionalMovieData(this.animationMovies, true);
                    })
                    .catch(error => {
                        console.error('Errore nel caricamento dei film di animazione:', error);
                    });
            },
            fetchAdditionalMovieData(movies, isMovie = true) {
                movies.forEach(movie => {
                    getMovieDetails(movie.id, isMovie)
                        .then(details => {
                            movie.genres = details.genres.map(genre => genre.name).join(', ');
                        })
                        .catch(error => {
                            console.error('Errore nel recupero dei dettagli del film:', error);
                        });

                    getMovieCredits(movie.id, isMovie)
                        .then(cast => {
                            movie.cast = cast.slice(0, 5).map(actor => `${actor.name} ${actor.surname}`);
                        })
                        .catch(error => {
                            console.error('Errore nel recupero del cast:', error);
                        });
                });
            }
        }
    };
</script>

<template>
    <div class="media-section">
        <CarouselComponent v-if="store.movies.length" :movies="store.movies" title="Risultati della ricerca" />

        <div v-else>
            <CarouselComponent :movies="topMovies" title="I film più visti" />
            <CarouselComponent :movies="actionMovies" title="Tutta l'Azione che cerchi" />
            <CarouselComponent :movies="comedyMovies" title="Tra una Commedia e l'altra" />
            <CarouselComponent :movies="animationMovies" title="Anime, e film di Animazione" />
        </div>
    </div>
</template>

<style scoped>
    .media-section {
        padding: 40px;
    }

    .section-title {
        font-size: 24px;
        font-weight: bold;
        color: #FFFFFF;
        margin-bottom: 20px;
    }
</style>
