<template>
    <div class="billboard-details absolute z-20 bottom-0 left-0 w-full h-full px-[5%] py-[80px]">
        <div class="w-full h-full flex flex-col justify-end">
            <div class="min-w-[20%] md:max-w-[35%] max-w-full flex flex-col md:items-start items-center">
                <div v-if="data?.supplemental_message" class="badge-container w-full mb-3.5 flex md:justify-start justify-center">
                    <div class="badge relative h-[26px] max-h-[26px] rounded-[11px] px-2 flex items-center justify-center">
                        <span class="relative z-[3] text-white text-xs font-medium whitespace-nowrap">{{ data?.supplemental_message }}</span>
                    </div>
                </div>
                <div class="content-logo w-full max-w-[200px]">
                    <img :src="data?.title_treatment" :alt="data?.title" loading="lazy">
                </div>
                <div class="metadata w-full mt-4 flex gap-1.5 items-center md:justify-start justify-center">
                    <div v-if="false" class="content-provider relative h-6 aspect-square rounded-full overflow-hidden bg-white"></div>
                    <div class="metadata-list">
                        <span v-for="(genre, genreIndex) in data.content_genres" :key="genreIndex" class="metadata-list-item text-white text-sm font-medium">
                            {{ genre.genres?.name }}
                        </span>
                    </div>
                </div>
                <div class="description w-full max-w-[300px] mt-4 md:block hidden">
                    <p class="text-white text-sm font-medium opacity-65">{{ data?.synopsis }}</p>
                </div>
                <div class="buttons w-full mt-4 flex gap-3 items-center md:justify-start justify-center">
                    <ButtonPr v-if="!isBook" @click="handleBooking(data)" style="height: 48px;" type="primary" :hasIcon="true" label="Prenota" :loading="false"
                        :disabled="false">
                        <template #icon>
                            <Ticket size="20" />
                        </template>
                    </ButtonPr>
                    <ButtonPr v-if="isBook" style="height: 48px;" type="primary" :hasIcon="true" label="Guarda il Trailer" :loading="false"
                        :disabled="false">
                        <template #icon>
                            <Ticket size="20" />
                        </template>
                    </ButtonPr>
                    <ButtonDot v-if="!isBook" @click="watchTrailer" style="height: 48px;" type="primary" :loading="false" :disabled="false">
                        <template #icon>
                            <Clapperboard size="20" />
                        </template>
                    </ButtonDot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonPr from "../button/button-pr.vue"
import ButtonDot from "../button/button-dot.vue"

// ICONS
import { Clapperboard, Ticket } from "lucide-vue-next"

export default {
    name: "billboard-details",
    components: {
        ButtonPr,
        ButtonDot,

        // ICONS
        Clapperboard,
        Ticket
    },
    props: {
        data: Object,
        isBook: Boolean
    },
    computed: {
        isReleased() {
            if (!this.data?.launch_date) return false;
            const launchDate = new Date(this.data.launch_date);
            const now = new Date();
            return launchDate <= now;
        },
        formattedDate() {
            if (!this.data?.launch_date) return '';
            const date = new Date(this.data.launch_date);
            return date.toLocaleDateString('it-IT', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        }
    },
    methods: {
        handleBooking(data) {
            const CONTENT_ID = data?.id;

            if (data && CONTENT_ID) {
                this.$router.push({ name: 'book', params: { id: CONTENT_ID } });
            }
        }
    }
}
</script>

<style scoped>
.badge::before {
    position: absolute;
    content: "";
    z-index: 2;
    border-radius: 11px;
    background-color: rgba(0, 0, 0, .8);
    inset: 1px;
}

.badge::after {
    position: absolute;
    content: "";
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 11px;
    box-shadow: 0 0 12px rgba(255, 255, 255, .16);
    background-image: linear-gradient(180deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, .18));
}

.metadata-list-item::after {
    content: "•";
    margin: 0 6px;
    font-size: 12px;
}

.metadata-list-item:last-child::after {
    display: none;
}

.description p {
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>