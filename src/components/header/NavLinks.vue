<script>
    export default {
        data() {
            return {
                navItems: [
                    { text: "Home", active: true, link: "#" },
                    { text: "Serie TV", active: false, link: "#" },
                    { text: "Film", active: false, link: "#" },
                    { text: "Nuovi e popolari", active: false, link: "#" },
                    { text: "La mia lista", active: false, link: "#" },
                    { text: "Sfoglia per lingua", active: false, link: "#" }
                ]
            };
        }
    };
</script>

<template>
    <ul class="navbar-nav me-auto">
        <li v-for="(item, index) in navItems" :key="index" class="nav-item">
            <a :class="['nav-link', { active: item.active }]" :href="item.link">{{ item.text }}</a>
        </li>
    </ul>
</template>

<style scoped>
    .nav-link.active {
        font-weight: bold;
    }
</style>