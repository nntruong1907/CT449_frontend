<template>
  <main class="py-5 main">
    <div class="container">
      <div class="row justify-content-center">
        <div class="form col-sm-12 col-lg-8">
          <p class="text-center mb-3 content_signin fw-bold">Sign Up</p>
          <form @submit.prevent="onSubmit(this.data)" class="form-horizontal">
            <div class="row m-0">
              <div class="col-md-6">
                <div class="form-group mb-3">
                  <label for="name" class="form-label">Full Name:</label>
                  <input type="text" class="form-control rounded" id="name" placeholder="Enter name"
                    v-model="this.data.name" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-3 ">
                  <label for="email" class="form-label">Email:</label>
                  <input type="email" class="form-control rounded" id="email" placeholder="Enter email"
                    v-model="this.data.email" />
                </div>
              </div>
            </div>
            <div class="row m-0">
              <div class="col-md-6">
                <div class="form-group mb-3 pe-0">
                  <label for="phone" class="form-label">Phone:</label>
                  <input type="text" class="form-control rounded" id="phone" placeholder="Enter phone"
                    v-model="this.data.phone" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-3 pe-0">
                  <label for="address" class="form-label">Address:</label>
                  <input type="text" class="form-control rounded" id="address" placeholder="Enter address"
                    v-model="this.data.address" />
                </div>
              </div>
            </div>
            <div class="row m-0">
              <div class="col-md-12">
                <div class="form-group mb-3 ps-0">
                  <label for="username" class="form-label">Username:</label>
                  <input type="text" class="form-control rounded" id="username" placeholder="Enter username"
                    v-model="this.data.account.username" />
                </div>
              </div>
              <!-- <div class="col-md-6">
                
              </div> -->
            </div>
            <div class="row m-0">
              <div class="col-md-6">
                <div class="form-group mb-3 passw">
                  <label for="pwd" class="form-label">Password:</label>
                  <input type="password" class="form-control rounded" id="pwd" placeholder="Enter password"
                    v-model="this.data.account.password" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-3 passw1">
                  <label for="cpwd" class="form-label">Confirm Password:</label>
                  <input type="password" class="form-control rounded" id="cpwd" placeholder="Confirm password"
                    v-model="this.confirmPass" />
                </div>
              </div>
            </div>

            <div class="row m-0 mt-2">
              <label>
                Already have an account?
                <span class="log-in">
                  <router-link to="/login"> <span class="text-success">Log in</span></router-link>
                </span>
              </label>
            </div>
            <div class="row m-0 mt-2 mb-2">
              <label>
                <input type="checkbox" checked>
                By Signing up you argee to our <strong>Terms Conditions & privacy policies</strong>.
              </label>
            </div>
            <div class="row justify-content-center m-0">
              <div class="col-sm-12 col-lg-7">
                <button type="submit" class="btn btn-primary col-12 btn_submit py-2 mb-4 text-uppercase">
                  Create account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import UserService from "@/services/user.service"
export default {
  data() {
    return {
      data: {
        name: "",
        phone: "",
        email: "",
        address: "",
        account: {
          username: "",
          password: "",
        },
      },
      confirmPass: "",
    };
  },
  methods: {
    async onSubmit(data) {
      await UserService.signup(data);
      alert('Account successfully created!');
      this.$router.push("/login");
    },
  },
};
</script>

<style>
@import "@/assets/css/login.css";
</style>

<style scoped>
.log-in :hover {
  text-decoration: none;
}
</style>
