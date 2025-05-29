<template>
    <div @click="handleBooking(data)" class="card-content relative w-full aspect-video rounded-2xl border border-solid border-white/15 overflow-hidden cursor-pointer">
        <div class="relative z-10 w-full h-full">
            <img :src="data?.thumb" :alt="data?.title" loading="lazy" class="w-full h-full object-cover">
        </div>
    </div>
</template>

<script>
export default {
    name: "card-content",
    props: {
        data: Object
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

<style scoped></style>