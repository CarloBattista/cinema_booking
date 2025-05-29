<template>
    <div class="w-full h-screen">
        <div class="max-w-[450px] h-full mx-auto px-6 flex flex-col gap-6 justify-center">
            <div class="w-full flex flex-col gap-1.5 items-center text-center">
                <svg class="w-[114px] h-[92px] mb-16">
                    <use href="/_resources/corn_pass_logo_white.svg#corn-pass-logo-white" />
                </svg>
                <p class="text-white sm:text-base text-sm font-normal">Welcome to CornPass</p>
                <h2 class="text-white sm:text-2xl text-base font-semibold">Let's Get You a Snak 😋</h2>
            </div>
            <form @submit.prevent class="w-full flex flex-col gap-3.5">
                <InputLg 
                    v-model="fields.user.email"
                    type="email" 
                    forInput="email" 
                    label="Email" 
                />
                <InputLg 
                    v-model="fields.user.password"
                    type="password" 
                    forInput="password" 
                    label="Password" 
                />
            </form>
        </div>
    </div>
</template>

<script>
import InputLg from "../../components/input/input-lg.vue";
import ButtonPr from "../../components/button/button-pr.vue";

export default {
    name: "Signin",
    components: {
        InputLg,
        ButtonPr
    },
    data() {
        return {
            fields: {
                user: {
                    email: "",
                    password: ""
                },
                errors: {
                    email: null,
                    password: null
                },
                loading: false,
            }
        }
    }
}
</script>

<style scoped></style>