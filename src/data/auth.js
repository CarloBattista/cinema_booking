import { reactive } from "vue";

export const auth = reactive({
    user: null,
    session: null,
    isAuthenticated: false
});