import { createWebHistory, createRouter } from "vue-router";
import Management from "@/components/manage/Management.vue";
import Common from "@/components/common/Common.vue";
import Login from "@/components/Login.vue";
import Index from "@/components/Index.vue";

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
      path: '/index/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index/management',
      name: 'Management',
      component: Management
    },
    {
      path: '/index/common',
      name: 'Common',
      component: Common
    }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;