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
                <h2 class="text-white sm:text-2xl text-base font-semibold">Change Your Name</h2>
                <p class="text-white text-xs font-normal">* Indicates a required field</p>
            </div>
            <div class="bg-fields w-full p-12 rounded-2xl">
                <div class="w-full mb-6 flex flex-col gap-1">
                    <p class="text-white text-base font-normal">Current Name:</p>
                    <h3 class="text-white text-xs font-semibold">{{ auth.profile?.first_name }} {{ auth.profile?.last_name }}</h3>
                </div>
                <form class="w-full flex flex-col" @submit.prevent>
                    <div class="w-full flex flex-col gap-4">
                        <InputLg v-model="fields.profile.firstName" type="text" forInput="firstName" label="First Name" :required="true" />
                        <InputLg v-model="fields.profile.lastName" type="text" forInput="lastName" label="Last Name" :required="true" />
                    </div>
                    <div class="w-full flex gap-4 mt-6">
                        <ButtonPr @click="actionEditName" class="w-full" type="primary" :hasIcon="false" label="Save" :loading="fields.loading" :disabled="false" />
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
import { supabase } from "../../lib/supabase";
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
    },
    methods: {
        async actionEditName() {
            this.fields.loading = true;

            try {
                const { data, error } = await supabase
                    .from('profiles')
                    .update({
                        first_name: this.fields.profile.firstName,
                        last_name: this.fields.profile.lastName
                    })
                    .eq('user_id', this.auth.user.id);

                    if (!error) {
                        this.$emit('profile-updated');
                        this.$router.push({ name: 'account' });
                    }
            } catch (e) {
                console.error(e);
            } finally {
                this.fields.loading = false;
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