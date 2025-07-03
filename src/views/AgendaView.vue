<template>
  <div class="agenda-container">
    <h1 class="page-title">Agenda</h1>
    <p class="page-subtitle">
      Gerencie os agendamentos e horários disponíveis.
    </p>

    <div class="date-navigation-section">
      <button class="nav-button prev-day">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <span class="current-date-label">Hoje</span>
      <span class="current-date-display">03 de Julho de 2025</span>
      <button class="nav-button next-day">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </div>

    <div class="filters-section">
      <div class="filter-group">
        <label for="filter-date">Data</label>
        <input type="date" id="filter-date" v-model="filters.date" />
      </div>

      <div class="filter-group">
        <label for="filter-time-start">Hora Início</label>
        <input type="time" id="filter-time-start" v-model="filters.timeStart" />
      </div>

      <div class="filter-group">
        <label for="filter-time-end">Hora Fim</label>
        <input type="time" id="filter-time-end" v-model="filters.timeEnd" />
      </div>

      <div class="filter-group">
        <label for="filter-type">Tipo</label>
        <select id="filter-type" v-model="filters.type">
          <option value="">Todos</option>
          <option value="aula">Aula</option>
          <option value="evento">Evento</option>
          <option value="livre">Horário Livre</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="filter-modality">Modalidade</label>
        <select id="filter-modality" v-model="filters.modality">
          <option value="">Todas</option>
          <option value="natacao">Natação</option>
          <option value="futebol">Futebol</option>
          <option value="basquete">Basquete</option>
        </select>
      </div>

      <button class="apply-filters-btn" @click="applyFilters">
        Aplicar Filtros
      </button>
      <button class="clear-filters-btn" @click="clearFilters">
        Limpar Filtros
      </button>
    </div>

    <div class="agenda-content">
      <p>
        Aqui será exibida a listagem ou calendário dos agendamentos filtrados.
      </p>
    </div>
  </div>
</template>

<script>
// Certifique-se de que 'faChevronLeft' e 'faChevronRight' estão na library do Font Awesome em main.js
export default {
  name: "AgendaView",
  data() {
    return {
      filters: {
        date: "",
        timeStart: "",
        timeEnd: "",
        type: "",
        modality: "",
      },
    };
  },
  methods: {
    applyFilters() {
      console.log("Filtros aplicados:", this.filters);
    },
    clearFilters() {
      this.filters = {
        date: "",
        timeStart: "",
        timeEnd: "",
        type: "",
        modality: "",
      };
      console.log("Filtros limpos.");
    },
  },
};
</script>

<style scoped>
.agenda-container {
  padding: 30px;
  background-color: #f8f8f8;
  min-height: calc(100vh - 70px);
}

.page-title {
  font-size: 2.2em;
  color: #333;
  margin-bottom: 10px;
  text-align: left;
}

.page-subtitle {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 30px;
  text-align: left;
}

/* Estilização da seção de navegação de data, conforme a foto */
.date-navigation-section {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinha os itens à esquerda */
  background-color: #ffffff; /* Fundo branco */
  padding: 15px 25px; /* Padding para a caixa */
  border-radius: 8px; /* Cantos arredondados */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  margin-bottom: 30px; /* Espaço abaixo da seção */
  gap: 15px; /* Espaçamento entre os elementos */
}

.nav-button {
  background: none; /* Sem fundo */
  border: none; /* Sem borda */
  padding: 5px; /* Padding pequeno para o clique */
  cursor: pointer;
  font-size: 1.2em; /* Tamanho do ícone */
  color: #777; /* Cor mais suave para as setas */
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button:hover {
  color: #333; /* Cor mais escura no hover */
}

.current-date-label {
  font-size: 1.1em; /* Tamanho para "Hoje" */
  font-weight: bold; /* Negrito para "Hoje" */
  color: #333; /* Cor escura para o texto */
  margin-right: 5px; /* Espaço entre "Hoje" e a data */
  white-space: nowrap; /* Evita quebra de linha */
}

.current-date-display {
  font-size: 1.1em; /* Tamanho para a data */
  color: #555; /* Cor um pouco mais suave para a data */
  white-space: nowrap; /* Evita quebra de linha */
}

/* Seção de filtros - Mantido como estava, mas garanto o espaçamento */
.filters-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  align-items: flex-end;
}

.filter-group {
  display: flex;
  flex-direction: column;
  min-width: 150px;
  flex: 1;
}

.filter-group label {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 5px;
  font-weight: bold;
}

.filters-section input[type="date"],
.filters-section input[type="time"],
.filters-section select {
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  color: #333;
  background-color: #fefefe;
  box-sizing: border-box;
  width: 100%;
}

.filters-section input[type="date"]:focus,
.filters-section input[type="time"]:focus,
.filters-section select:focus {
  border-color: #42b983;
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}

.apply-filters-btn,
.clear-filters-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  align-self: flex-end;
}

.apply-filters-btn {
  background-color: #42b983;
  color: white;
}

.apply-filters-btn:hover {
  background-color: #36a47a;
}

.clear-filters-btn {
  background-color: #f0f0f0;
  color: #555;
  border: 1px solid #ccc;
}

.clear-filters-btn:hover {
  background-color: #e0e0e0;
}

.agenda-content {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #777;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
