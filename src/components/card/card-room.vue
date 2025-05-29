<template>
    <div class="card-room relative w-full aspect-video max-h-[100px] rounded-2xl p-4 border border-solid border-white/15 overflow-hidden">
        <div class="relative z-10 w-full h-full flex flex-col justify-between">
            <div class="w-full flex items-center justify-between">
                <h2 class="text-white text-base font-semibold">Sala {{ data?.room_number }}</h2>
                <div class="relative h-3 aspect-square rounded-full" :class="{ 'bg-green-500': data?.is_open, 'bg-red-500': !data?.is_open }"></div>
            </div>
            <div class="w-full flex items-center">
                <span class="text-white text-sm font-normal">{{ data?.places }} posti</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "card-room",
    props: {
        data: Object
    }
}
</script>

<style scoped>
.card-room::before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/_resources/images/background-utility.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>