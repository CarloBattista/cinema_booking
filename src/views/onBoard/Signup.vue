<template>
    <div class="w-full h-screen">
        <div class="absolute z-10 top-0 left-0 w-full h-[70vh]">
            <img src="/_resources/images/hero_cinema_bg.jpg" alt="hero image cinema" class="w-full h-full object-cover">
            <div class="vignette radial absolute top-0 left-0 w-full h-full"></div>
            <div class="vignette linear absolute top-0 left-0 w-full h-full"></div>
        </div>
        <div class="relative z-20 max-w-[450px] h-full mx-auto px-6 flex flex-col gap-6 justify-center">
            <div class="w-full flex flex-col gap-1.5 items-center text-center">
                <svg class="w-[114px] h-[92px] mb-16">
                    <use href="/_resources/corn_pass_logo_white.svg#corn-pass-logo-white" />
                </svg>
                <p class="text-white sm:text-base text-sm font-normal">Welcome to CornPass</p>
                <h2 class="text-white sm:text-2xl text-base font-semibold">Let's Get You a Snak 😋</h2>
            </div>
            <form @submit.prevent class="w-full flex flex-col gap-3.5">
                <div class="w-full flex gap-3.5">
                    <InputLg v-model="fields.user.firstName" type="text" forInput="firstName" label="First Name" />
                    <InputLg v-model="fields.user.lastName" type="text" forInput="lastName" label="Last Name" />
                </div>
                <InputLg v-model="fields.user.email" type="email" forInput="email" label="Email" />
                <InputLg v-model="fields.user.password" type="password" forInput="password" label="Password" />
                <ButtonPr @click="actionSignup" class="mt-11" type="primary" :hasIcon="false" label="Create account" :loading="fields.loading"
                    :disabled="fields.loading" />
            </form>
            <div class="w-full flex flex-col gap-2 items-center justify-center text-center">
                <p class="text-white sm:text-base text-sm font-normal">Already have an account? <strong>
                        <RouterLink to="/identity/signin">Sign in</RouterLink>
                    </strong></p>
            </div>
        </div>
    </div>
</template>

<script>
import { supabase } from "../../lib/supabase";
import { auth } from "../../data/auth";

import InputLg from "../../components/input/input-lg.vue";
import ButtonPr from "../../components/button/button-pr.vue";

export default {
    name: "Signup",
    components: {
        InputLg,
        ButtonPr
    },
    data() {
        return {
            auth,
            
            fields: {
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                },
                errors: {
                    firstName: null,
                    lastName: null,
                    email: null,
                    password: null
                },
                loading: false,
            }
        }
    },
    methods: {
        async actionSignup() {
            this.fields.loading = true;

            try {
                const { data, error } = await supabase.auth.signUp({
                    email: this.fields.user.email,
                    password: this.fields.user.password
                });

                if (!error) {
                    // console.log(data);

                    this.auth.user = data.user;
                    this.auth.session = data.session;

                    this.$router.push({ name: 'signin' });
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
.vignette.radial {
    background: #000000;
    background: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}

.vignette.linear {
    background: #000000;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}
</style>