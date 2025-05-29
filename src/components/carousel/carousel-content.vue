<template>
    <div class="carousel-rooms relative w-full my-[3vw]">
        <div class="w-full px-[5%] mb-3 flex items-center">
            <h2 class="text-white text-xl font-semibold">{{ getCarouselTitle }}</h2>
        </div>
        <div class="w-full">
            <Splide :options="options" aria-label="Contents carousel">
                <SplideSlide v-for="(content, contentIndex) in filteredContents" :key="contentIndex">
                    <cardContent :data="content" />
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<script>
import { supabase } from "../../lib/supabase";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { store } from "../../data/store";

import cardContent from "../card/card-content.vue";

import "../../style/carousel-rooms.css"

export default {
    name: "carousel-content",
    components: {
        Splide,
        SplideSlide,

        cardContent
    },
    props: {
        type: String
    },
    data() {
        return {
            store
        }
    },
    computed: {
        getCarouselTitle() {
            if (this.type === 'upcoming') {
                return 'In arrivo';
            } else if (this.type === 'now-playing') {
                return 'In programma';
            }
        },
        filteredContents() {
            const now = new Date();
            if (this.type === 'upcoming') {
                return this.store.contents.data.filter(content => {
                    const launchDate = new Date(content.launch_date);
                    return launchDate > now;
                });
            } else if (this.type === 'now-playing') {
                return this.store.contents.data.filter(content => {
                    const launchDate = new Date(content.launch_date);
                    return launchDate <= now;
                });
            }
            return this.store.contents.data;
        }
    },
    setup() {
        const options = {
            arrows: true,
            drag: false,
            rewind: false,
            pagination: false,
            perPage: 5,
            perMove: 5,
            gap: '1rem',
            breakpoints: {
                1024: {
                    perPage: 4,
                    perMove: 4
                },
                768: {
                    arrows: false,
                    drag: true,
                    perPage: 3,
                    perMove: 3
                },
                480: {
                    perPage: 2,
                    perMove: 2
                }
            }
        };

        return { options };
    }
}
</script>

<style scoped></style>