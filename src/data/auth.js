import { reactive } from "vue";

export const auth = reactive({
    user: null,
    session: null,
    profile: null,
    isAuthenticated: false,

    USER_AUTH_ID: null,
    PROFILE_AUTH_ID: null,
});