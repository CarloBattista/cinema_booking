<template>
    <div class="header fixed z-[99999] top-0 left-0 w-full h-[76px] px-[5%] flex items-center justify-between">
        <div class="h-full flex items-center justify-start">
            <span @click="goToHome" class="logo cursor-pointer"></span>
            <!-- <div class="relative w-full h-full ml-7 flex gap-4 items-center"></div> -->
        </div>
        <div class="h-full flex items-center justify-end">
            <div class="relative h-8 aspect-square bg-black rounded-full overflow-hidden cursor-pointer">
                <img src="/_resources/user.webp" alt="" draggable="false" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navbar",
    methods: {
        goToHome() {
            this.$router.push({ name: 'home' });
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
.header::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 180px;
    background: #000000;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}

.logo {
    background-image: url("/_resources/corn_pass_logo_white.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 60px;
    min-width: 60px;
    height: 50px;
}
</style>