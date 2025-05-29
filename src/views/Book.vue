<template>
    <navbar />
    <div class="relative z-10 w-full">
        <billboard :data="content.data" :isBook="true" />
    </div>
</template>

<script>
import { supabase } from "../lib/supabase";

import navbar from "../components/nav/navbar.vue";
import billboard from "../components/billboard/billboard.vue";

export default {
    name: "book",
    components: {
        navbar,
        billboard
    },
    data() {
        return {
            contentId: this.$route.params.id,

            content: {
                data: [],
                loading: false,
                error: null
            }
        }
    },
    methods: {
        async getContent() {
            this.content.loading = true;

            try {
                const { data, error } = await supabase
                    .from('contents')
                    .select('*,content_genres(genres(*))')
                    .eq('id', this.contentId)
                    .single();

                if (!error) {
                    console.log(data);
                    this.content.data = data;
                }
            } catch (e) {
                console.error(e);
            } finally {
                this.content.loading = false;
            }
        }
    },
    watch: {
        'contentId': {
            handler(value) {
                if (value) {
                    this.getContent();
                }
            },
            immediate: true,
            deep: true
        },
    }
}
</script>

<style scoped></style>