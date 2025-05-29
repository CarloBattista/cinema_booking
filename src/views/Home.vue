<template>
    <navbar />
    <div class="relative z-10 w-full">
        <CarouselBillboard />
        <CarouselRooms />
        <CarouselContent type="now-playing" />
        <CarouselContent type="upcoming" />
    </div>
</template>

<script>
import { supabase } from "../lib/supabase";
import { store } from "../data/store";

import navbar from "../components/nav/navbar.vue";
import CarouselBillboard from "../components/carousel/carousel-billboard.vue";
import CarouselRooms from "../components/carousel/carousel-rooms.vue";
import CarouselContent from "../components/carousel/carousel-content.vue";

export default {
    name: "Home",
    components: {
        navbar,
        CarouselBillboard,
        CarouselRooms,
        CarouselContent
    },
    data() {
        return {
            store
        }
    },
    methods: {
        async getContents() {
            this.store.contents.loading = true;

            try {
                const { data, error } = await supabase
                    .from('contents')
                    .select('*,content_genres(genres(*))');

                if (!error) {
                    console.log(data);
                    this.store.contents.data = data;
                }
            } catch (e) {
                console.error(e);
            } finally {
                this.store.contents.loading = false;
            }
        }
    },
    mounted() {
        window.scrollTo(0, 0);
        
        this.getContents();
    }
}
</script>

<style scoped></style>