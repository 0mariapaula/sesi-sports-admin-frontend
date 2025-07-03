<template>
  <div class="admin-layout">
    <header class="navbar">
      <div class="logo-area">
        <img
          src="@/assets/sesi-sports-logo.png"
          alt="SESI Sports Logo"
          class="header-logo"
        />
        <span class="app-name">SESI Sports</span>
      </div>
      <nav class="main-nav">
        <router-link to="/admin/agenda" class="nav-item">Agenda</router-link>
        <router-link to="/admin/cadastros" class="nav-item"
          >Cadastros</router-link
        >
        <router-link to="/admin/dashboard" class="nav-item"
          >Dashboard</router-link
        >
      </nav>
      <div class="user-profile-and-actions">
        <div class="profile-circle" @click="goToProfile">
          <font-awesome-icon icon="user" />
        </div>
        <button @click="logout" class="logout-btn">Sair</button>
      </div>
    </header>

    <div class="content-wrapper">
      <aside class="sidebar">
        <router-link to="/admin/agenda" class="sidebar-item"
          >Agenda</router-link
        >
        <router-link to="/admin/dashboard" class="sidebar-item"
          >Dashboard</router-link
        >
        <div class="sidebar-section">
          <span class="sidebar-section-title">Cadastros</span>
          <router-link to="/admin/clients" class="sidebar-sub-item"
            >Clientes</router-link
          >
          <router-link to="/admin/technicians/new" class="sidebar-sub-item"
            >Técnicos</router-link
          >
        </div>
      </aside>

      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLayout",
  methods: {
    logout() {
      alert("Saindo..."); // Simulação de logout
      this.$router.push("/"); // Redireciona para a tela de login
    },
    goToProfile() {
      alert(
        "Clicou na bolinha de perfil! Aqui irá para a edição do perfil do técnico/admin."
      );
      // Exemplo: this.$router.push('/admin/profile');
    },
  },
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa; /* Fundo mais claro, quase branco para o corpo do painel */
  font-family: "Roboto", sans-serif; /* Uma fonte mais comum para interfaces */
}

/* Cabeçalho */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50; /* Cor escura do Figma para o cabeçalho */
  padding: 10px 40px; /* Mais padding para os lados */
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 70px; /* Altura fixa para o cabeçalho */
}

.logo-area {
  display: flex;
  align-items: center;
}

.header-logo {
  height: 45px; /* Tamanho do logo ajustado */
  margin-right: 15px;
}

.app-name {
  font-size: 1.8em; /* Tamanho do texto "SESI Sports" */
  font-weight: 700; /* Negrito */
  color: #ecf0f1; /* Cor mais clara para o texto */
}

.main-nav {
  display: flex;
  gap: 30px; /* Espaçamento maior entre os itens do menu principal */
}

.nav-item {
  color: #ecf0f1; /* Cor mais clara para os links */
  text-decoration: none;
  font-weight: 600; /* Semi-negrito */
  padding: 8px 0;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  position: relative; /* Para o efeito de underline */
}

.nav-item::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background: #42b983; /* Cor do underline */
  bottom: -5px;
  left: 0;
  transition: width 0.3s ease-in-out;
}

.nav-item:hover::after,
.nav-item.router-link-exact-active::after {
  width: 100%;
}

.nav-item:hover,
.nav-item.router-link-exact-active {
  color: #42b983; /* Verde para item ativo/hover */
}

.user-profile-and-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-circle {
  width: 40px;
  height: 40px;
  background-color: #bdc3c7; /* Cor cinza para a bolinha */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.4em; /* Tamanho do ícone de usuário */
  color: #2c3e50; /* Cor escura para o ícone */
  transition: background-color 0.3s ease;
}

.profile-circle:hover {
  background-color: #95a5a6;
}

.logout-btn {
  background-color: #e74c3c; /* Vermelho para o botão de sair */
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #c0392b;
}

/* Conteúdo Principal e Sidebar */
.content-wrapper {
  display: flex;
  flex: 1; /* Ocupa o espaço restante verticalmente */
}

.sidebar {
  width: 250px; /* Largura da barra lateral */
  background-color: #34495e; /* Cor mais escura para a sidebar (similar ao Figma) */
  padding: 20px 0; /* Padding vertical, sem horizontal para os itens se alinharem */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.sidebar-item,
.sidebar-sub-item {
  color: #ecf0f1; /* Cor clara para os links */
  text-decoration: none;
  padding: 12px 25px; /* Padding para os itens do menu lateral */
  margin-bottom: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: block; /* Para ocupar a largura total do item */
  font-weight: 500;
}

.sidebar-item:hover,
.sidebar-sub-item:hover {
  background-color: rgba(66, 185, 131, 0.2); /* Verde mais suave para hover */
  color: #42b983;
}

.sidebar-item.router-link-exact-active,
.sidebar-sub-item.router-link-exact-active {
  background-color: #42b983; /* Verde forte para item ativo */
  color: white; /* Texto branco quando ativo */
  font-weight: 600;
}

.sidebar-section {
  margin-top: 25px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Linha divisória */
}

.sidebar-section-title {
  color: #bdc3c7; /* Cor para títulos de seção */
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
  padding-left: 25px; /* Alinha com os itens */
  font-size: 0.9em;
  text-transform: uppercase;
}

.sidebar-sub-item {
  padding-left: 45px; /* Indentação para sub-itens */
  font-size: 0.9em;
}

.main-content {
  flex: 1; /* Ocupa o restante do espaço horizontal */
  padding: 30px;
  overflow-y: auto; /* Adiciona scroll se o conteúdo for muito grande */
}
</style>
