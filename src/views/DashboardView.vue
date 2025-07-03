<template>
  <div class="dashboard-content">
    <h1 class="welcome-title">Bem-vindo ao SESI Sports!</h1>
    <p class="welcome-subtitle">Acesse rapidamente os módulos do sistema.</p>

    <h2 class="modules-title">Módulos do Sistema</h2>
    <div class="modules-grid">
      <router-link to="/admin/clients" class="module-card">
        <div class="card-icon">
          <font-awesome-icon :icon="['fas', 'users']" />
        </div>
        <h3 class="card-title">Clientes</h3>
        <p class="card-description">Gerencie todos os clientes cadastrados.</p>
        <button class="card-button">Acessar</button>
      </router-link>

      <router-link to="/admin/technicians/new" class="module-card">
        <div class="card-icon">
          <font-awesome-icon :icon="['fas', 'user-gear']" />
        </div>
        <h3 class="card-title">Técnicos</h3>
        <p class="card-description">Gerencie e cadastre novos técnicos.</p>
        <button class="card-button">Acessar</button>
      </router-link>

      <router-link to="/admin/agenda" class="module-card">
        <div class="card-icon">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" />
        </div>
        <h3 class="card-title">Agendamentos</h3>
        <p class="card-description">
          Consulte e gerencie a agenda de serviços.
        </p>
        <button class="card-button">Acessar</button>
      </router-link>

      <router-link to="/admin/dashboard" class="module-card">
        <div class="card-icon">
          <font-awesome-icon :icon="['fas', 'chart-bar']" />
        </div>
        <h3 class="card-title">Relatórios</h3>
        <p class="card-description">
          Visualize dados e estatísticas do sistema.
        </p>
        <button class="card-button">Acessar</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
};
</script>

<style scoped>
/* Estilos para o container principal do Dashboard */
.dashboard-content {
  padding: 40px;
  background-color: #f0f2f5; /* Fundo suave para a área de conteúdo */
  min-height: calc(
    100vh - 60px
  ); /* Ocupa o restante da altura da viewport menos o header */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
  color: #333;
}

/* Títulos principais */
.welcome-title {
  font-size: 2.8em;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 700;
  text-align: center;
}

.welcome-subtitle {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 50px;
  text-align: center;
}

.modules-title {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 30px;
  font-weight: 600;
  text-align: center;
  width: 100%;
}

/* Grid para os cartões dos módulos */
.modules-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(280px, 1fr)
  ); /* 4 colunas responsivas, mínimo 280px */
  gap: 30px; /* Espaçamento entre os cartões */
  width: 100%;
  max-width: 1200px; /* Largura máxima do grid */
  margin-top: 20px;
}

/* Estilo de cada cartão de módulo */
.module-card {
  background-color: #ffffff;
  border-radius: 15px; /* Bordas mais arredondadas */
  padding: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* Sombra mais pronunciada */
  text-align: center;
  text-decoration: none; /* Remover sublinhado do link */
  color: inherit; /* Herdar cor do texto */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animação suave */
  display: flex; /* Para centralizar conteúdo verticalmente */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 250px; /* Altura mínima para manter uniformidade */
}

.module-card:hover {
  transform: translateY(-10px); /* Efeito de elevação no hover */
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15); /* Sombra maior no hover */
}

/* Ícone do cartão */
.card-icon {
  font-size: 3.5em; /* Tamanho do ícone */
  color: #42b983; /* Cor verde do tema */
  margin-bottom: 20px;
  width: 80px; /* Tamanho fixo para o container do ícone */
  height: 80px;
  background-color: #e6ffee; /* Fundo mais claro para o ícone */
  border-radius: 50%; /* Torna o fundo redondo */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); /* Sombra sutil para o círculo */
}

/* Título do cartão */
.card-title {
  font-size: 1.8em;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 600;
}

/* Descrição do cartão */
.card-description {
  font-size: 1em;
  color: #666;
  margin-bottom: 25px;
  line-height: 1.5;
}

/* Botão do cartão */
.card-button {
  background-color: #007bff; /* Azul padrão para o botão */
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.05em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 80%; /* Ocupa uma boa parte da largura do card */
  max-width: 200px;
}

.card-button:hover {
  background-color: #0056b3; /* Azul mais escuro no hover */
  transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 768px) {
  .modules-grid {
    grid-template-columns: 1fr; /* Uma coluna em telas menores */
    padding: 0 15px;
  }
  .welcome-title {
    font-size: 2em;
  }
  .welcome-subtitle,
  .modules-title {
    font-size: 1em;
  }
  .dashboard-content {
    padding: 20px 15px;
  }
}
</style>
