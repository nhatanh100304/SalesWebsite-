import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import CardPage from "@/components/CardPage.vue";
import DetailCard from "@/components/DetailCard.vue";
import BillPage from "@/components/BillPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import MenuWater from "@/components/MenuWater.vue";
import MenuChicken from "@/components/MenuChicken.vue";
import MenuPageComBo from "@/components/MenuPageComBo.vue";
const routes = [
      {
        path: "/",
        name: "HomePage",
        component: HomePage
      },
     
      {
        path: "/CardPage",
        name: "CardPage",
        component: CardPage
      },
      {
        path: "/DetailCard/:id",
        name: "DetailCard",
        component: DetailCard
      },
      
      {
        path: '/BillPage',
        name: 'BillPage',
        component: BillPage
      },
      {
        path: '/LoginPage',
        name: 'LoginPage',
        component: LoginPage
      },
      {
        path: '/RegisterPage',
        name: 'RegisterPage',
        component: RegisterPage
      },
      {
        path: '/MenuWater',
        name: 'MenuWater',
        component: MenuWater
      },
      {
        path: '/MenuChicken',
        name: 'MenuChicken',
        component: MenuChicken
      },
      {
        path: '/MenuPageComBo',
        name: 'MenuPageComBo',
        component: MenuPageComBo
      },


      

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;