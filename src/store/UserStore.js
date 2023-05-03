import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        userid: null,
        token: null,
        isLogIn: false,
        user: {},
    }),

    actions: {
        logIn(data) {
            this.userid = data.user._id;
            this.token = data.AccessToken;
            this.isLogIn = true;
            this.user = data.user;
        },
        logOut() {
            this.userid = null;
            this.token = null;
            this.isLogIn = false;
            this.user = {};
        }
    },
    persist: true,
});