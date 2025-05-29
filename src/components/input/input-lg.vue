<template>
    <div class="relative w-full">
        <input @focusin="focusIn" @focusout="focusOut" @input="updateValue" :type="inputType" :id="forInput" :value="modelValue" class="w-full h-14 max-h-14 px-6 pt-3 bg-[#14181B] rounded-3xl outline-0">
        <label :for="forInput" class="absolute left-6 font-normal pointer-events-none transition-all duration-300" :class="{ 'text-[#9FA3A6] text-xs top-[15%] translate-y-[0%]': isFocused, 'text-white text-base top-1/2 translate-y-[-50%]': !isFocused }">
            {{ label }}
            <span v-if="required">*</span>
        </label>
        <div @click="togglePasswordVisibility" v-if="type === 'password'" class="absolute top-0 right-6 h-full flex items-center justify-center cursor-pointer">
            <Eye v-if="isPasswordVisible" color="#9FA3A6" size="20" />
            <EyeClosed v-else color="#9FA3A6" size="20" />
        </div>
    </div>
</template>

<script>
// ICONS
import { Eye, EyeClosed } from "lucide-vue-next";

export default {
    name: "input-lg",
    components: {
        // ICONS
        Eye,
        EyeClosed
    },
    props: {
        type: String,
        forInput: String,
        label: String,
        modelValue: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isFocused: false,
            isPasswordVisible: false,
            inputType: this.type
        }
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(newValue) {
                this.isFocused = newValue.length > 0;
            }
        }
    },
    methods: {
        focusIn() {
            this.isFocused = true;
        },
        focusOut() {
            if (this.modelValue.length === 0) {
                this.isFocused = false;
            }
        },
        togglePasswordVisibility() {
            this.isPasswordVisible = !this.isPasswordVisible;
            this.inputType = this.isPasswordVisible ? 'text' : 'password';
        },
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style scoped></style>