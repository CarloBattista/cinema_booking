import { reactive } from "vue";

export const store = reactive({
    contents: {
        data: [],
        loading: false,
        error: null
    },
    rooms: {
        data: [],
        loading: false,
        error: null
    }
});