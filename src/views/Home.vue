<template>
    <navbar />
    <div class="relative z-10 w-full">
        <CarouselBillboard v-if="!store.contents.loading" />
    </div>
</template>

<script>
import { supabase } from "../lib/supabase";
import { store } from "../data/store";

import navbar from "../components/nav/navbar.vue";
import CarouselBillboard from "../components/carousel/carousel-billboard.vue";

export default {
    name: "Home",
    components: {
        navbar,
        CarouselBillboard
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
                    .select('*');

                if (!error) {
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
        this.getContents();
    }
}
</script>

<style scoped></style>