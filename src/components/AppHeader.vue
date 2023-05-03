<template>
  <header >
    <div class="logo">
      <!-- Logo -->
      <router-link to="/">
        <h2 class="text-black text-center pt-2 text-uppercase" style="font-weight: bold">
          <img src="@/assets/svg/Logo.svg" width="60" />
        </h2>
      </router-link>
      <div class="row m-0 align-items-center">
        <!-- Search -->
        <div class="col mx-5 my-0">
          <form role="search" method="POST" class="search-form" action="/search" name="search-form">
            <label>
              <input type="search" class="search-field" placeholder="What are you looking for?" value="" name="search" />
            </label>
            <input type="submit" class="search-submit" value="Search" />
          </form>
        </div>
        <!-- Account -->
        <div v-if="this.userStore.user.name" class="col-sm-12 col-md-5 col-lg-3 user-login text-end">
          <div class="user">
            <img :src="this.userStore.user.avatar.avatar_path" class="avatarUser" />
            {{ this.userStore.user.name }} |
            <a @click="logOut" class="text-danger fw-bold log-out">
              <i class="fa-solid fa-right-from-bracket"></i>
              Log Out
            </a>
          </div>
        </div>

        <div v-else class="col-sm-12 col-md-5 col-lg-3 user-login text-end">
          <div class="user">
            <i class="far fa-user text-dark"></i>
            <router-link to="/login" class="ms-2 text-dark fw-bold">Log In</router-link>
          </div>
        </div>

      </div>
    </div>
  </header>
  <!-- Navigator -->
  <div class="position-sticky" style="top: 0; z-index: 1000;">
    <nav class="navbar navbar-expand-lg " style="background-color:rgba(255,255,255,0.9)">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav" style="font-size: 18px;">
            <li class="nav-item me-5">
              <router-link class="nav-link text-black" to="/">HOME</router-link>
            </li>
            <li class="nav-item mx-5">
              <router-link class="nav-link text-black" to="/products">PRODUCTS</router-link>
            </li>
            <li class="nav-item ms-5">
              <router-link class="nav-link text-black" to="/orders">ORDERS
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>

import InputSearch from '@/components/InputSearch.vue';

import UserService from "@/services/user.service";
import { useUserStore } from "@/store/UserStore";
export default {
  components: {
    InputSearch
  },
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  methods: {
    // async logOut() {
    //   await UserService.logout();
    // await this.userStore.logOut();
    //   this.$router.go();
    // },
    async logOut() {
      this.userStore.user = {};
      // await UserService.logout();
      await this.userStore.logOut();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.log-out {
  cursor: pointer;
}

.avatarUser {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.dropdown-menu {
  left: -90px;
  min-width: 10rem;
}

.dropdown {
  cursor: pointer;
}

.icon {
  font-size: 1rem;
}
</style>