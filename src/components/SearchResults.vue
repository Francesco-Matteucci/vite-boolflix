<script>
    import CardComponent from './CardComponent.vue';
    import { store } from '../store.js';

    export default {
        components: {
            CardComponent
        },
        setup() {
            return {
                store
            };
        }
    };
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="movie in store.movies" :key="movie.id" class="col-6 col-md-4 col-lg-3 mb-4">
                <CardComponent :movie="movie" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        padding: 0 15px;
    }
</style>