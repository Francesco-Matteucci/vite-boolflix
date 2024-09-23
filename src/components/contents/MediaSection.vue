<script>
    import CarouselComponent from '../shared/CarouselComponent.vue';
    import { searchTopMovies, getActionMovies, getComedyMovies, getAnimationMovies } from '../../api.js';

    export default {
        components: {
            CarouselComponent
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
        <CarouselComponent :movies="topMovies" title="Film più visti" />

        <CarouselComponent :movies="actionMovies" title="Film d'Azione" />

        <CarouselComponent :movies="comedyMovies" title="Commedie" />

        <CarouselComponent :movies="animationMovies" title="Film di Animazione" />
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
