<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo SESI Sports" class="logo" />
    </div>

    <ul class="menu">
      <li><a href="#" class="active">Agenda</a></li>
      <li><a href="#">Cadastros</a></li>
      <li><a href="#">Dashboard</a></li>
    </ul>

    <div class="profile-section">
      <div class="avatar"></div>
      <button class="logout-btn">Sair <span class="icon">⇨</span></button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff; /* Cor de fundo conforme o Figma */
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
}

.menu {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.menu li a {
  text-decoration: none;
  color: #333333;
  font-weight: 500;
  position: relative;
}

.menu li a.active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #333333;
  bottom: -4px;
  left: 0;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar {
  width: 35px;
  height: 35px;
  background-color: #555555;
  border-radius: 50%;
}

.logout-btn {
  background-color: #d32f2f; /* Vermelho padrão do Figma */
  color: #ffffff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.logout-btn:hover {
  background-color: #b71c1c;
}

.icon {
  font-size: 14px;
}
</style>
