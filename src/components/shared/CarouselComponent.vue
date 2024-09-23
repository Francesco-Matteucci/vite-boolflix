<script>
    import CardComponent from '../contents/CardComponent.vue';

    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            movies: {
                type: Array,
                required: true,
            }
        },
        components: {
            CardComponent,
        },
        data() {
            return {
                scrollPosition: 0,
            };
        },
        methods: {
            scrollLeft() {
                const container = this.$refs.carouselContainer;
                this.scrollPosition -= container.clientWidth;
                container.scrollTo({
                    left: this.scrollPosition,
                    behavior: 'smooth'
                });
            },
            scrollRight() {
                const container = this.$refs.carouselContainer;
                this.scrollPosition += container.clientWidth;
                container.scrollTo({
                    left: this.scrollPosition,
                    behavior: 'smooth'
                });
            }
        }
    };
</script>

<template>
    <div class="carousel-section">
        <h2 class="carousel-title">{{ title }}</h2>
        <div class="carousel-container-wrapper">
            <button class="prev" @click="scrollLeft">
                <i class="bi bi-chevron-left"></i>
            </button>
            <div class="carousel-container" ref="carouselContainer">
                <div class="carousel-items">
                    <div v-for="movie in movies" :key="movie.id" class="custom-carousel-item">
                        <!-- Utilizziamo CardComponent per gestire il rendering -->
                        <CardComponent :movie="movie" />
                    </div>
                </div>
            </div>
            <button class="next" @click="scrollRight">
                <i class="bi bi-chevron-right"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>
    .carousel-section {
        margin-bottom: 2rem;
    }

    .carousel-title {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .carousel-container-wrapper {
        position: relative;
    }

    .carousel-container {
        display: flex;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .carousel-items {
        display: flex;
        gap: 1rem;
    }

    .custom-carousel-item {
        min-width: 120px;
        min-height: 180px;
    }

    button.prev,
    button.next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0);
        border: none;
        height: 100%;
        cursor: pointer;
        color: white;
        font-size: 1.5rem;
        opacity: 0;
    }

    button.prev {
        left: -60px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.next {
        right: -60px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .carousel-container-wrapper:hover button {
        background: rgba(0, 0, 0, 0.5);
        opacity: 1;
    }
</style>
