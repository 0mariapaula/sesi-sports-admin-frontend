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
      <button class="logout-btn">
        Sair
        <i class="fas fa-sign-out-alt"></i>
      </button>
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
  background-color: #f5f5f5;
  padding: 8px 24px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 30px;
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
  color: #333;
  font-weight: 400;
  position: relative;
  font-size: 15px;
}

.menu li a.active {
  font-weight: 700;
}

.menu li a.active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #333;
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
  background-color: #444;
  border-radius: 50%;
}

.logout-btn {
  background-color: #0d47a1;
  color: #fff;
  border: none;
  padding: 6px 14px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

.logout-btn:hover {
  background-color: #08306b;
}

.logout-btn i {
  font-size: 14px;
}
</style>
