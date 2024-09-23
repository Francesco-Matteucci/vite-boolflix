<script>
    import CarouselComponent from '../shared/CarouselComponent.vue';
    import { searchTopMovies, getActionMovies, getComedyMovies, getAnimationMovies } from '../../api.js';
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
        methods: {
            fetchTopMovies() {
                searchTopMovies().then(movies => {
                    this.topMovies = movies;
                }).catch(error => {
                    console.error('Errore nel caricamento dei film più visti:', error);
                });
            },
            fetchActionMovies() {
                getActionMovies().then(movies => {
                    this.actionMovies = movies;
                }).catch(error => {
                    console.error('Errore nel caricamento dei film d\'azione:', error);
                });
            },
            fetchComedyMovies() {
                getComedyMovies().then(movies => {
                    this.comedyMovies = movies;
                }).catch(error => {
                    console.error('Errore nel caricamento delle commedie:', error);
                });
            },
            fetchAnimationMovies() {
                getAnimationMovies().then(movies => {
                    this.animationMovies = movies;
                }).catch(error => {
                    console.error('Errore nel caricamento dei film di animazione:', error);
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
