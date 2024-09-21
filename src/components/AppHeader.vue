<script>
    import SearchBar from './SearchBar.vue';
    import UserProfile from './UserProfile.vue';
    import NavLinks from './NavLinks.vue';

    export default {
        components: {
            SearchBar,
            UserProfile,
            NavLinks
        }
    };
</script>

<template>
    <header class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="logo">
                <h1>BOOLFLIX</h1>
            </div>

            <NavLinks />

            <div class="d-flex align-items-center">
                <SearchBar />
                <UserProfile />
            </div>
        </div>
    </header>
</template>

<style scoped>
    .logo h1 {
        font-size: 24px;
        color: red;
        margin: 0;
    }

    .bi-search {
        font-size: 1.5rem;
        color: white;
    }

    .cursor-pointer {
        cursor: pointer;
    }
</style>