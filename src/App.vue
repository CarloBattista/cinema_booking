<template>
  <div>
    <RouterView @user-updated="getUser" @profile-updated="getProfile" />
  </div>
</template>

<script>
import { supabase } from "./lib/supabase";
import { auth } from "./data/auth";

export default {
  name: "App",
  data() {
    return {
      auth
    }
  },
  methods: {
    async getUser() {
      try {
        const { data, error } = await supabase.auth.getUser()

        if (!error) {
          // console.log(data);
          this.auth.user = data.user;
          this.auth.isAuthenticated = true;

          localStorage.setItem('crps_auth', JSON.stringify({
            user: this.auth.user,
            isAuthenticated: this.auth.isAuthenticated
          }));

          this.getSession();
        }
      } catch (e) {
        console.error(e);
      }
    },
    async getSession() {
      try {
        const { data, error } = await supabase.auth.getSession()

        if (!error) {
          // console.log(data);
          this.auth.session = data.session;

          localStorage.setItem('crps_auth', JSON.stringify({
            ...this.auth,
            session: data.session
          }));
        }
      } catch (e) {
        console.error(e);
      }
    },
    async getProfile() {
      const AUTH_USER_ID = this.auth.user.id;

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', AUTH_USER_ID)

        if (!error) {
          // console.log(data);
          this.auth.profile = data[0];
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  mounted() {
    this.getUser();
  },
  watch: {
    'auth.user': {
      handler(value) {
        if (value) {
          this.getSession();
          this.getProfile();
        }
      },
      deep: true
    },
  }
}
</script>

<style></style>