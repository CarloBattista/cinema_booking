<template>
    <button tabindex="0" class="relative btn-pr h-14 max-h-14 px-6 rounded-3xl flex gap-2 items-center justify-center"
        :class="'color-' + type, { 'loading': loading }" :disabled="disabled">
        <div v-if="hasIcon && !loading">
            <slot name="icon"></slot>
        </div>
        <span v-if="loading" class="loader"></span>
        <span class="text-base font-medium">{{ label }}</span>
    </button>
</template>

<script>
export default {
    name: "button-pr",
    props: {
        type: {
            type: String,
            default: "primary"
        },
        hasIcon: Boolean,
        label: {
            type: String,
            default: "Button"
        },
        loading: Boolean,
        disabled: Boolean
    }
}
</script>

<style scoped>
.btn-pr {
    transition-property: background-color, color, transform, opacity;
    transition-duration: 250ms;
    transition-timing-function: ease;
}

.btn-pr:not([disabled]) {
    cursor: pointer;
}

.btn-pr[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-pr.loading {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-pr:focus::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    outline-offset: 2px;
    outline-width: 2px;
    outline-style: solid;
    outline-color: white;
}

.btn-pr:active {
    transform: scale(0.98);
    opacity: .8;
}

/* Primary */
.btn-pr.color-primary {
    background-color: white;
    color: black;
}

.btn-pr.color-primary:hover {
    background-color: #E5E5E5;
}

/* Secondary */
.btn-pr.color-secondary {
    background-color: black;
    color: white;
}

.btn-pr.color-secondary:hover {
    background-color: #14181B;
}

/* Loader */
.loader {
    width: 24px;
    aspect-ratio: 1;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.btn-pr.color-primary .loader {
    border: 3px solid black;
    border-bottom-color: transparent;
}

.btn-pr.color-secondary .loader {
    border: 3px solid white;
    border-bottom-color: transparent;
}
</style>