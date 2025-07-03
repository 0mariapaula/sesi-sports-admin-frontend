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
    goToProfile() {
      alert("Navegar para o perfil do usuário!");
    },
    logout() {
      alert("Usuário deslogado!");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* Estilos gerais do layout */
.admin-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5;
}

/* Estilos da barra de navegação superior */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 15px 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-logo {
  width: 153px;
  height: 35px;
  object-fit: contain;
}

.app-name {
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
}

.main-nav {
  display: flex;
  gap: 20px;
  flex-grow: 1;
  justify-content: center;
}

.nav-item {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  padding: 5px 10px;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-item:hover {
  color: #42b983;
}

.nav-item.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}

.user-profile-and-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.profile-circle {
  width: 40px;
  height: 40px;
  background-color: #42b983;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-shrink: 0;
}

.profile-circle:hover {
  background-color: #36a47a;
}

.logout-btn {
  background-color: #164194;
  width: 95px;
  height: 40px;
  border-radius: 5.39px;
  padding: 13px 20px;
  gap: 6px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logout-btn:hover {
  background-color: #12347a;
}

/* Wrapper para o conteúdo principal e a barra lateral */
.content-wrapper {
  display: flex;
  flex: 1;
}

/* Estilos da barra lateral */
.sidebar {
  width: 220px;
  background-color: #e6e6e6; /* Cor da coluna: #E6E6E6 */
  padding-top: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.sidebar-item,
.sidebar-sub-item {
  color: #3f3f3f; /* Cor dos nomes: #3F3F3F */
  text-decoration: none;
  padding: 12px 25px;
  margin-bottom: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: block;

  /* Novas propriedades de fonte dos nomes */
  font-family: "Inter", sans-serif; /* Adicionado Inter, com fallback */
  font-weight: 400;
  font-size: 22px;
  line-height: 18.72px; /* Line-height exato */
}

.sidebar-item:hover,
.sidebar-sub-item:hover {
  background-color: rgba(66, 185, 131, 0.2); /* Verde mais suave para hover */
  color: #42b983; /* Manter cor verde no hover para consistência */
}

.sidebar-item.router-link-exact-active,
.sidebar-sub-item.router-link-exact-active {
  background-color: #42b983; /* Verde forte para item ativo */
  color: white; /* Texto branco quando ativo */
  font-weight: 600; /* Manter bold quando ativo */
}

.sidebar-section {
  margin-top: 25px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-section-title {
  color: #3f3f3f; /* Ajustado para a cor dos nomes */
  font-size: 22px; /* Ajustado para o tamanho dos nomes */
  font-weight: 400; /* Ajustado para o peso dos nomes */
  font-family: "Inter", sans-serif;
  padding: 0 25px 10px;
  display: block;
  text-transform: none; /* Remover uppercase se não for desejado */
  line-height: 18.72px;
}

/* Estilos do conteúdo principal */
.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
