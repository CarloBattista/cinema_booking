<template>
    <div class="billboard w-full h-full">
        <div class="relative z-10 w-full h-full">
            <picture class="w-full h-full object-cover">
                <source media="(max-width: 768px)"
                    srcset="https://image.tmdb.org/t/p/original/4UIaVKullZIoKQC5ZYPJ4VY8bDk.jpg" loading="lazy">
                <img src="https://image.tmdb.org/t/p/original/4UIaVKullZIoKQC5ZYPJ4VY8bDk.jpg" alt="" loading="lazy"
                    class="w-full h-full object-cover">
            </picture>
            <div class="vignette left absolute z-20 top-0 left-0 w-1/2 h-full md:block hidden"></div>
            <div class="vignette bottom absolute z-20 bottom-0 left-0 w-full h-1/2"></div>
        </div>
        <billboard-details />
    </div>
</template>

<script>
import billboardDetails from "./billboard-details.vue";

export default {
    name: "billboard",
    components: {
        billboardDetails
    }
}
</script>

<style scoped>
.vignette.left {
    background: #000000;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}

.vignette.bottom {
    background: #000000;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}
</style>