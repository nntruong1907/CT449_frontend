import { createWebHistory, createRouter } from "vue-router";
import { useUserStore } from '@/store/UserStore';

const routes = [
  {
    path: "/",
    component: () => import("@/views/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () => import("@/views/products/ProductPage.vue"),
      },
      {
        path: "product/:id",
        name: 'product.detail',
        component: () => import("@/views/products/ProductDetail.vue"),
        props: true
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("@/views/orders/OrderPage.vue"),
        // meta: {
        //   requiresAuth: true
        // }
      },
      {
        path: "order/:id",
        name: "order.detail",
        component: () => import("@/views/orders/OrderDetail.vue"),
        props: true
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/views/auth/LoginPage.vue"),
      },
      {
        path: "signup",
        name: "signup",
        component: () => import("@/views/auth/SignupPage.vue"),
      },
    ],
  },

  {
    path: "/admin/",
    name: "admin",
    component: () => import("@/views/layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        name: "admin.products",
        component: () => import("@/views/admin/ProductManager.vue"),
      },
      {
        path: "customers",
        name: "admin.customers",
        component: () => import("@/views/admin/CustomerManager.vue"),
      },
      {
        path: "orders",
        name: "admin.orders",
        component: () => import("@/views/admin/OrderManager.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore();
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!userStore.login) {
//       next({
//         path: '/account',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router;