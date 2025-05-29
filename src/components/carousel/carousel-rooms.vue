<template>
    <div class="carousel-rooms relative w-full">
        <div class="w-full px-[5%] mb-3 flex items-center">
            <h2 class="text-white text-xl font-semibold">Sale</h2>
        </div>
        <div class="w-full">
            <Splide :options="options" aria-label="Rooms carousel">
                <SplideSlide v-for="(room, roomIndex) in store.rooms.data" :key="roomIndex">
                    <cardRoom :data="room" />
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<script>
import { supabase } from "../../lib/supabase";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { store } from "../../data/store";

import cardRoom from "../card/card-room.vue";

import "../../style/carousel-rooms.css"

export default {
    name: "carousel-rooms",
    components: {
        Splide,
        SplideSlide,

        cardRoom
    },
    data() {
        return {
            store
        }
    },
    methods: {
        async getRooms() {
            this.store.rooms.loading = true;

            try {
                const { data, error } = await supabase
                    .from('rooms')
                    .select('*');

                if (!error) {
                    this.store.rooms.data = data;
                }
            } catch (e) {
                console.error(e);
            } finally {
                this.store.rooms.loading = false;
            }
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
    },
    mounted() {
        this.getRooms();
    }
}
</script>

<style scoped></style>