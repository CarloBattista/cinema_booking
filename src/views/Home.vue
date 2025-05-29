<template>
    <div class="relative z-10 w-full">
        <CarouselBillboard />
    </div>
</template>

<script>
import CarouselBillboard from "../components/carousel/carousel-billboard.vue";

export default {
    name: "Home",
    components: {
        CarouselBillboard
    }
}
</script>

<style scoped></style>