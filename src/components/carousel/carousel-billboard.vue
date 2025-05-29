<template>
    <div class="carousel-billboard relative w-full">
        <Splide :options="options" aria-label="Hero billboard carousel">
            <SplideSlide v-for="(billboard, billboardIndex) in store.contents.data" :key="billboardIndex">
                <billboard :data="billboard" :isBook="false" />
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { store } from "../../data/store";

import billboard from '../billboard/billboard.vue';

import "../../style/carousel-billboard.css"

export default {
    name: "carousel-billboard",
    components: {
        Splide,
        SplideSlide,

        billboard
    },
    data() {
        return {
            store
        }
    },
    setup() {
        const options = {
            arrows: false,
            drag: false,
            rewind: true,
            pagination: true,
            autoplay: true,
            perPage: 1,
            perMove: 1,
            type: 'loop',
            interval: 10000, // 10 seconds
        };

        return { options };
    },
}
</script>

<style scoped></style>