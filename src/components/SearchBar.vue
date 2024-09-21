<script>
    import { store } from '../store.js';
    import { searchMovies, searchTVSeries } from '../api.js';

    export default {
        data() {
            return {
                store,
                showSearch: false,
            };
        },
        methods: {
            toggleSearch() {
                this.showSearch = !this.showSearch;
                if (!this.showSearch) {
                    store.searchQuery = '';
                }
            },
            search() {
                if (store.searchQuery) {
                    console.log("Sto cercando:", store.searchQuery);
                    searchMovies(store.searchQuery);
                    searchTVSeries(store.searchQuery);
                }
            }
        }
    };
</script>

<template>
    <div class="search-bar d-flex align-items-center">

        <div v-if="!showSearch" class="me-3" @click="toggleSearch" style="cursor: pointer;">
            <i class="bi bi-search"></i>
        </div>

        <div v-if="showSearch" class="search-form d-flex align-items-center me-3">
            <i class="bi bi-search"></i>
            <input type="text" class="form-control ms-2" v-model="store.searchQuery" placeholder="Cerca per titoli"
                @keyup.enter="search" />
        </div>
    </div>
</template>

<style scoped>
    .search-form {
        width: 250px;
        transition: width 0.3s ease-in-out;
    }
</style>