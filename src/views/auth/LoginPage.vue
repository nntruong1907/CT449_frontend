<template>
  <main class="py-5 main">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="form col-sm-12 col-md-8 col-lg-4">
          <p class="text-center mb-4 content_signin fw-bold">Motorcycle Store</p>
          <form id="signinForm" method="post" class="form-horizontal" @submit.prevent="onSubmit(this.account)">
            <div class="form-group mb-3">
              <label for="username" class="form-label">Username:</label>
              <input type="text" class="form-control py-2 rounded" id="username" placeholder="Enter your username" required
                v-model="this.account.username" />
            </div>
            <div class="form-group mb-3 passw">
              <label for="pwd" class="form-label">Password:</label>
              <input type="password" class="form-control py-2 rounded" id="password" placeholder="Enter your password"
                name="password" v-model="this.account.password" required />
            </div>
            {{ this.error }}
            <div class="text-end mb-3">

              <label class="text-primary fw-bold">Forget Password?</label>
            </div>
            <button type="submit" class="btn btn-primary col-12 btn_submit py-2 mb-3">
              LOGIN
            </button>
          </form>
          <button type="button" class="btn btn-success col-12 btn_create py-2 mb-3">
            <router-link to="/signup">CREATE ACCOUNT</router-link>
          </button>
          <p class="text-center" style="font-size: 16px">OR</p>
          <div class="row-12">
            <button class="btn btn-light mb-4 col-4 btn_gg">
              <img src="@/assets/svg/google.svg" alt="" style="height: 30px" />
              <router-link to="https://www.google.com/"></router-link>
            </button>
            <button class="btn btn-light mb-4 col-4 btn_fb">
              <img src="@/assets/svg/facebook.svg" alt="" style="height: 30px" />
              <router-link to="https://www.facebook.com/"></router-link>
            </button>
            <button class="btn btn-light mb-4 col-4 btn_gh">
              <img src="@/assets/svg/github.svg" alt="" style="height: 30px" />
              <router-link to="https://github.com/"></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useUserStore } from "@/store/UserStore";
import UserService from "@/services/user.service";
export default {
  data() {
    const userStore = useUserStore();
    return {
      account: {
        username: "",
        password: "",
      },
      error: null,
      userStore,
    };
  },
  methods: {
    async onSubmit(data) {
      try {
        const response = await UserService.login(data);
        if (response) {
          await this.userStore.logIn(response);
          if (response.user.account.admin) {
            this.$router.push({ name: "admin.products" });
          }
          else {
            this.$router.push({ name: "home" });
          }
        }
      } catch (error) {
        alert(error.response.data.message)
      }
    },
  },
};
</script>

<style>
@import "@/assets/css/login.css";
</style>
