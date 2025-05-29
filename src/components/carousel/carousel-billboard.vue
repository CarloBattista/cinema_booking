<template>
    <div class="carousel-billboard relative w-full h-[90vh]">
        <Splide :options="options" aria-label="Hero billboard carousel">
            <SplideSlide v-for="(billboard, billboardIndex) in 6" :key="billboardIndex">
                <billboard :data="billboard" />
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import billboard from '../billboard/billboard.vue';

import "../../style/carousel-billboard.css"

export default {
    name: "carousel-billboard",
    components: {
        Splide,
        SplideSlide,

        billboard
    },
    setup() {
        const options = {
            rewind: true,
            arrows: false,
            pagination: true,
            perPage: 1,
            perMove: 1,
            type: 'loop',
            autoplay: true,
            interval: 10000, // 10 seconds
        };

        return { options };
    },
}
</script>

<style scoped></style>