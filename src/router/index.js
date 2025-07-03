// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

// Importe os componentes do painel administrativo
import AdminLayout from "../layouts/AdminLayout.vue"; // O LAYOUT PRINCIPAL
import DashboardView from "../views/DashboardView.vue";
import ClientList from "../views/ClientList.vue";
import ClientForm from "../views/ClientForm.vue";
import TechnicianForm from "../views/TechnicianForm.vue";
import AgendaView from "../views/AgendaView.vue"; // Componente para a tela de agenda

const routes = [
  {
    path: "/", // Rota raiz: DEVE ser a tela de Login
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  // Rota pai para o painel administrativo que usa o AdminLayout
  {
    path: "/admin", // O caminho base para todas as rotas do admin
    component: AdminLayout, // O componente AdminLayout será renderizado aqui
    children: [
      // AS ROTAS FILHAS SERÃO RENDERIZADAS DENTRO DO <router-view /> DO AdminLayout
      {
        path: "dashboard", // Rota completa: /admin/dashboard
        name: "dashboard",
        component: DashboardView,
      },
      {
        path: "clients", // Rota completa: /admin/clients
        name: "ClientList",
        component: ClientList,
      },
      {
        path: "clients/new", // Rota completa: /admin/clients/new
        name: "ClientNew",
        component: ClientForm,
      },
      {
        path: "clients/edit/:id", // Rota completa: /admin/clients/edit/:id
        name: "ClientEdit",
        component: ClientForm,
        props: true,
      },
      {
        path: "technicians/new", // Rota completa: /admin/technicians/new
        name: "TechnicianNew",
        component: TechnicianForm,
      },
      {
        path: "agenda", // Rota completa: /admin/agenda
        name: "AgendaView",
        component: AgendaView,
      },
      // Uma rota para a seção de 'Cadastros' que pode levar a um dashboard ou lista de opções
      {
        path: "cadastros", // Rota completa: /admin/cadastros
        name: "CadastrosHome",
        component: DashboardView, // Por enquanto, pode ser o Dashboard, ou crie um componente específico
      },
      // Redireciona de /admin para /admin/dashboard se o path for exatamente /admin
      {
        path: "",
        redirect: { name: "dashboard" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
