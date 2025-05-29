<template>
    <navbar />
    <div class="relative z-10 w-full">
        <CarouselBillboard />
    </div>
</template>

<script>
import navbar from "../components/nav/navbar.vue";
import CarouselBillboard from "../components/carousel/carousel-billboard.vue";

export default {
    name: "Home",
    components: {
        navbar,
        CarouselBillboard
    }
}
</script>

<style scoped></style>