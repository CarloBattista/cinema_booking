<template>
    <navbar />
    <div class="w-full h-screen">
        <div class="relative z-20 max-w-[650px] h-full mx-auto px-6 flex flex-col gap-6 justify-center">
            <div class="w-full flex flex-col gap-1.5 items-center text-center">
                <h2 class="text-white sm:text-2xl text-base font-semibold">Change Your Name</h2>
                <p class="text-white text-xs font-normal">* Indicates a required field</p>
            </div>
            <div class="bg-fields w-full p-12 rounded-2xl">
                <div class="w-full mb-6 flex flex-col gap-1">
                    <p class="text-white text-base font-normal">Current Name:</p>
                    <h3 class="text-white text-xs font-semibold">Carlo Battista</h3>
                </div>
                <form class="w-full flex flex-col" @submit.prevent>
                    <div class="w-full flex flex-col gap-4">
                        <InputLg v-model="fields.profile.firstName" type="text" forInput="firstName" label="First Name" :required="true" />
                        <InputLg v-model="fields.profile.lastName" type="text" forInput="lastName" label="Last Name" :required="true" />
                    </div>
                    <div class="w-full flex gap-4 mt-6">
                        <ButtonPr class="w-full" type="primary" :hasIcon="false" label="Save" :loading="false" :disabled="false" />
                        <RouterLink to="/account" class="w-full">
                            <ButtonPr class="w-full" type="secondary" :hasIcon="false" label="Cancel" :loading="false" :disabled="false" />
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { auth } from "../../data/auth";

import navbar from "../../components/nav/navbar.vue";
import InputLg from "../../components/input/input-lg.vue";
import ButtonPr from "../../components/button/button-pr.vue";

// ICONS
import { Pencil } from "lucide-vue-next";

export default {
    name: "EditName",
    components: {
        navbar,
        InputLg,
        ButtonPr,

        // ICONS
        Pencil
    },
    data() {
        return {
            auth,

            fields: {
                profile: {
                    firstName: "",
                    lastName: ""
                },
                errors: {
                    firstName: null,
                    lastName: null
                },
                loading: false,
            }
        }
    }
}
</script>

<style scoped>
.bg-fields {
    background-color: rgba(221, 221, 221, 0.06);
}
</style>