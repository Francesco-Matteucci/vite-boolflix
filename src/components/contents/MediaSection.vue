<script>
    import CardComponent from './CardComponent.vue';
    import { store } from '../../store.js';
    import { searchTopMovies } from '../../api.js';

    export default {
        components: {
            CardComponent
        },
        setup() {
            return {
                store
            };
        },
        computed: {
            // Creo una computed che determina se mostrare i risultati della ricerca o i contenuti predefiniti
            mediaList() {
                return store.movies.length ? store.movies : this.defaultMediaList;
            },
            // Computed che determina il titolo da mostrare
            sectionTitle() {
                return store.movies.length
                    ? 'Film filtrati secondo la tua ricerca'
                    : 'Film più visti';
            }
        },
        data() {
            return {
                // Lista di default da mostrare all'apertura dell'app
                defaultMediaList: []
            };
        },
        created() {
            // Popolo i film più visti all'apertura dell'app
            this.fetchDefaultMedia();
        },
        methods: {
            fetchDefaultMedia() {
                searchTopMovies().then(movies => {
                    this.defaultMediaList = movies;
                }).catch(error => {
                    console.error('Errore durante il caricamento dei film predefiniti:', error);
                });
            }
        }
    };
</script>

<template>
    <div class="media-section">

        <div class="row justify-content-start">
            <div class="col-12">
                <h2 class="section-title">{{ sectionTitle }}</h2>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div v-for="media in mediaList" :key="media.id" class="col-6 col-md-4 col-lg-2 mb-4">
                    <CardComponent :movie="media" />
                </div>
            </div>
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
