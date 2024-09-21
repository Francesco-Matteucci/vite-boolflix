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
    <header class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <div class="logo me-4">
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

<style lang="scss" scoped>
    header {
        position: sticky;
        top: 0;
        z-index: 1;
        opacity: 0.8;
        background-color: #000;

        &:hover {
            opacity: 1;
        }
    }

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