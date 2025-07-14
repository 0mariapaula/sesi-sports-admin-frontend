<template>
  <div class="dashboard">
    <h1>Dashboard</h1>

    <div class="view-toggle">
      <button :class="{ active: mode === 'day' }" @click="mode = 'day'">
        Dia
      </button>
      <button :class="{ active: mode === 'week' }" @click="mode = 'week'">
        Semana
      </button>
      <button :class="{ active: mode === 'month' }" @click="mode = 'month'">
        Mês
      </button>
    </div>

    <div class="summary-cards">
      <div class="card azul">
        <h3>Agendas</h3>
        <p class="count">148</p>
        <small>Apenas confirmadas</small>
      </div>
      <div class="card verde">
        <h3>Matrículas</h3>
        <p class="count">220</p>
        <small>Apenas confirmadas</small>
      </div>
      <div class="card laranja">
        <h3>Competições</h3>
        <p class="count">03</p>
        <small>Apenas confirmadas</small>
      </div>
    </div>

    <h2>Informações Gerais</h2>

    <div class="charts">
      <div class="chart-box">
        <h4>Acompanhamento Mensal</h4>
        <MonthlyChart />
      </div>
      <div class="chart-box">
        <h4>Acompanhamento Anual</h4>
        <AnnualChart />
      </div>
    </div>
  </div>
</template>

<script>
import MonthlyChart from "@/components/MonthlyChart.vue";
import AnnualChart from "@/components/AnnualChart.vue";

export default {
  name: "DashboardView",
  components: {
    MonthlyChart,
    AnnualChart,
  },
  data() {
    return {
      mode: "month",
    };
  },
};
</script>

<style scoped>
.dashboard {
  padding: 30px;
  font-family: sans-serif;
}
.view-toggle {
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-bottom: 20px;
}
.view-toggle button {
  background: #eee;
  border: none;
  padding: 6px 15px;
  border-radius: 5px;
  cursor: pointer;
}
.view-toggle button.active {
  background: black;
  color: white;
}
.summary-cards {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}
.card {
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  color: white;
}
.card h3 {
  margin: 0;
  font-size: 1.2rem;
}
.card .count {
  font-size: 2rem;
  margin: 10px 0;
}
.card.azul {
  background: #e1ecff;
  color: #0d47a1;
  border: 1px solid #90caf9;
}
.card.verde {
  background: #e0f8e9;
  color: #1b5e20;
  border: 1px solid #a5d6a7;
}
.card.laranja {
  background: #fff3e0;
  color: #e65100;
  border: 1px solid #ffb74d;
}
.charts {
  display: flex;
  gap: 30px;
}
.chart-box {
  flex: 1;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
}
</style>
