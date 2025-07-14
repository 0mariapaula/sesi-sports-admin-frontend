// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Páginas públicas
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

// Layout do admin + rotas protegidas
import AdminLayout from "../layouts/AdminLayout.vue";
import DashboardView from "../views/DashboardView.vue";
import ClientList from "../views/ClientList.vue";
import ClientForm from "../views/ClientForm.vue";
import TechnicianForm from "../views/TechnicianForm.vue";
import AgendaView from "../views/AgendaView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: DashboardView,
      },
      {
        path: "clients",
        name: "ClientList",
        component: ClientList,
      },
      {
        path: "clients/new",
        name: "ClientNew",
        component: ClientForm,
      },
      {
        path: "clients/edit/:id",
        name: "ClientEdit",
        component: ClientForm,
        props: true,
      },
      {
        path: "technicians/new",
        name: "TechnicianNew",
        component: TechnicianForm,
      },
      {
        path: "agenda",
        name: "AgendaView",
        component: AgendaView,
      },
      {
        path: "cadastros",
        name: "CadastrosHome",
        component: DashboardView,
      },
      {
        path: "",
        redirect: { name: "dashboard" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(), // ← Aqui está a correção
  routes,
});

export default router;
