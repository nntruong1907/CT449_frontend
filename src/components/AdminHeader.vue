<template>
  <nav class="navbar navbar-light bg-white shadow justify-content-end pe-5">
    <div class="icon-menu d-flex align-items-center">
      <div class="dropdown">
        <a data-bs-toggle="dropdown">
          <i class="far fa-bell"></i>
        </a>
        <div class="dropdown-menu px-3">
          <p>Final project of subject CT449</p>
        </div>
      </div>
      <div class="dropdown">
        <a data-bs-toggle="dropdown">
          <img :src="this.userStore.user.avatar.avatar_path" width="40" height="40"
            class="rounded-circle border border-success" />
        </a>
        <ul class="dropdown-menu px-3">
          <li><i class="fa-regular fa-user icon"></i> {{ this.userStore.user.account.username }} </li>
          <hr />
          <li><i class="fa-solid fa-gear icon"></i> Setting</li>
          <li class="text-danger mt-2" @click="logOut">
            <i class="fa-solid fa-arrow-right-from-bracket icon"></i> Log out
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from "@/store/UserStore";
export default {
  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  methods: {
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