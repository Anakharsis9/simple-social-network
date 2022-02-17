/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signUp",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
    meta: {
      isPublic: true,
    },
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
    meta: {
      isPublic: true,
    },
  },
  {
    path: "/friend/:userId",
    name: "FriendPage",
    component: () => import("../views/FriendProfile.vue"),
  },
  {
    path: "/:id",
    component: () => import("../views/UserProfile.vue"),
    children: [
      {
        path: "/",
        name: "UserProfileInfo",
        component: () => import("../components/UserInfo.vue"),
      },
      {
        path: "userEdit",
        name: "UserProfileEdit",
        component: () => import("../components/UserEdit.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    redirect: { name: "SignIn" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isPublic = to.meta.isPublic;
  const token = localStorage.getItem("token");

  if (!token && !isPublic) {
    return next({
      name: "SignIn",
    });
  }

  if (token && isPublic) {
    return next({
      name: "UserProfileInfo",
      params: {
        id: token,
      },
    });
  }

  return next();
});

export default router;
