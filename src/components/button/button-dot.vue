<template>
    <button tabindex="0" class="relative btn-dot h-14 max-h-14 aspect-square rounded-full flex items-center justify-center"
        :class="'color-' + type, { 'loading': loading }" :disabled="disabled">
        <div v-if="!loading">
            <slot name="icon"></slot>
        </div>
        <span v-if="loading" class="loader"></span>
    </button>
</template>

<script>
export default {
    name: "button-dot",
    props: {
        type: {
            type: String,
            default: "primary"
        },
        loading: Boolean,
        disabled: Boolean
    }
}
</script>

<style scoped>
.btn-dot {
    transition-property: background-color, color, transform, opacity;
    transition-duration: 250ms;
    transition-timing-function: ease;
}

.btn-dot:not([disabled]) {
    cursor: pointer;
}

.btn-dot[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-dot.loading {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-dot:focus::before {
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

.btn-dot:active {
    transform: scale(0.98);
    opacity: .8;
}

/* Primary */
.btn-dot.color-primary {
    background-color: rgba(128, 128, 128, .4);
    color: white;
}

.btn-dot.color-primary:hover {
    background-color: rgba(128, 128, 128, .2);
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
</style>