<template>
  <div class="pt-3 d-flex align-items-center justify-content-center">
    <img src="@/assets/svg/Logo.svg" width="50" />
    <h3 class="m-0 ms-2">Motorcycle Store</h3>
  </div>
  <hr />
  <div>
    <div class="ms-4">
      <div class=" mb-3">
        <router-link to="/admin"><i class="fas fa-box me-3"></i>Product Management</router-link>
      </div>
      <div class=" mb-3">
        <router-link to="/admin/orders"><i class="fas fa-file me-3"></i>Order Management</router-link>
      </div>
      <div class=" mb-3">
        <router-link to="/admin/customers"><i class="fas fa-user-circle me-3"></i>User management</router-link>
      </div>
    </div>
  </div>
</template>
