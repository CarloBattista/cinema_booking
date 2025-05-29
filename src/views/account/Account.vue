<template>
    <navbar />
    <div class="w-full h-screen">
        <div class="absolute z-10 top-0 left-0 w-full h-[70vh]">
            <img src="/_resources/images/background-utility.jpg" alt="image background" class="w-full h-full object-cover">
            <div class="vignette radial absolute top-0 left-0 w-full h-full"></div>
            <div class="vignette linear absolute top-0 left-0 w-full h-full"></div>
        </div>
        <div class="relative z-20 max-w-[650px] h-full mx-auto px-6 flex flex-col gap-6 justify-center">
            <div class="w-full flex flex-col gap-1.5 items-center text-center">
                <h2 class="text-white sm:text-2xl text-base font-semibold">Account</h2>
            </div>
            <div class="w-full flex flex-col gap-3">
                <h2 class="text-white text-base font-semibold">Account Details</h2>
                <div class="w-full flex flex-col">
                    <RouterLink to="/account/edit/email" class="account-detail-item">
                        <div class="w-full px-5 pt-2 pb-4 flex flex-col cursor-pointer">
                            <div class="w-full flex gap-3 items-center justify-between">
                                <h3 class="text-white text-base font-semibold">Email Address</h3>
                                <div class="relative h-11 aspect-square flex items-center justify-center cursor-pointer">
                                    <Pencil size="20" />
                                </div>
                            </div>
                            <p class="text-white text-xs font-normal">{{ auth.user?.email }}</p>
                        </div>
                    </RouterLink>
                    <RouterLink to="/account/edit/password" class="account-detail-item">
                        <div class="w-full px-5 pt-2 pb-4 flex flex-col cursor-pointer">
                            <div class="w-full flex gap-3 items-center justify-between">
                                <h3 class="text-white text-base font-semibold">Password</h3>
                                <div class="relative h-11 aspect-square flex items-center justify-center cursor-pointer">
                                    <Pencil size="20" />
                                </div>
                            </div>
                            <p class="text-white text-xs font-normal">•••••••••••</p>
                        </div>
                    </RouterLink>
                    <RouterLink to="/account/edit/name" class="account-detail-item">
                        <div class="w-full px-5 pt-2 pb-4 flex flex-col cursor-pointer">
                            <div class="w-full flex gap-3 items-center justify-between">
                                <h3 class="text-white text-base font-semibold">Profile Name</h3>
                                <div class="relative h-11 aspect-square flex items-center justify-center cursor-pointer">
                                    <Pencil size="20" />
                                </div>
                            </div>
                            <p class="text-white text-xs font-normal">{{ auth.profile?.first_name }} {{ auth.profile?.last_name }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { auth } from "../../data/auth";

import navbar from "../../components/nav/navbar.vue";

// ICONS
import { Pencil } from "lucide-vue-next";

export default {
    name: "Account",
    components: {
        navbar,

        // ICONS
        Pencil
    },
    data() {
        return {
            auth
        }
    }
}
</script>

<style scoped>
.account-detail-item {
    background-color: rgba(221, 221, 221, 0.06);
    border-bottom: 1px solid rgba(221, 221, 221, 0.1);
}

.account-detail-item:hover {
    background-color: rgba(221, 221, 221, 0.10);
}

.account-detail-item:first-child {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

.account-detail-item:last-child {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom: none;
}
</style>