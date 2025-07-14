<template>
  <div class="agenda-layout">
    <main class="main-content">
      <!-- Filtros -->
      <div class="filters">
        <label>Data <input type="date" v-model="filtros.data" /></label>
        <label
          >Hr Início <input type="time" v-model="filtros.horaInicio"
        /></label>
        <label>Hr Fim <input type="time" v-model="filtros.horaFim" /></label>
        <label>
          Tipo
          <select v-model="filtros.tipo">
            <option value="">Todos</option>
            <option>Esporte</option>
            <option>Cultural</option>
          </select>
        </label>
        <label>
          Modalidade
          <select v-model="filtros.modalidade">
            <option value="">Todas</option>
            <option>Futsal</option>
            <option>Vôlei</option>
            <option>Dança</option>
          </select>
        </label>
        <button class="btn-filtrar" @click="filtrarEventos">Filtrar</button>
        <button class="btn-limpar" @click="limparFiltros">Limpar</button>
      </div>

      <div class="novo-agendamento">
        <button class="btn-novo" @click="mostrarModal = true">
          + Novo Agendamento
        </button>
      </div>

      <!-- Modal de Novo Evento -->
      <div class="modal" v-if="mostrarModal">
        <div class="modal-content">
          <h2>Novo Agendamento</h2>
          <label>
            Título <input v-model="novoEvento.titulo" type="text" />
          </label>
          <label>Data <input v-model="novoEvento.data" type="date" /></label>
          <label>Hora <input v-model="novoEvento.hora" type="time" /></label>
          <label>
            Tipo
            <select v-model="novoEvento.tipo">
              <option>Esporte</option>
              <option>Cultural</option>
            </select>
          </label>
          <label>
            Modalidade
            <select v-model="novoEvento.modalidade">
              <option>Futsal</option>
              <option>Vôlei</option>
              <option>Dança</option>
            </select>
          </label>
          <div class="modal-actions">
            <button @click="salvarEvento">Salvar</button>
            <button @click="mostrarModal = false">Cancelar</button>
          </div>
        </div>
      </div>

      <!-- Agenda com grade -->
      <div class="calendar">
        <div class="calendar-header">
          <div class="time-col"></div>
          <div class="day-col" v-for="dia in dias" :key="dia">{{ dia }}</div>
        </div>

        <div class="calendar-grid">
          <!-- Horas -->
          <div class="time-col">
            <div class="time-slot" v-for="hora in horas" :key="hora">
              {{ hora }}
            </div>
          </div>

          <!-- Dias -->
          <div class="day-col" v-for="(dia, idx) in dias" :key="dia">
            <div class="time-slot" v-for="hora in horas" :key="hora"></div>

            <!-- Eventos -->
            <div
              v-for="(evento, i) in eventosFiltradosByDia(idx)"
              :key="i"
              class="event"
              :style="{ top: calcularTop(evento.hora) + 'px' }"
            >
              {{ evento.titulo }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Dias e horários da grade
const dias = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const horas = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

// Filtros
const filtros = ref({
  data: "",
  horaInicio: "",
  horaFim: "",
  tipo: "",
  modalidade: "",
});

// Lista de eventos
const eventos = ref([
  {
    titulo: "Futsal",
    data: "2025-07-08",
    hora: "10:00",
    tipo: "Esporte",
    modalidade: "Futsal",
    diaIndex: 2, // Qua
  },
]);

// Modal + evento novo
const mostrarModal = ref(false);
const novoEvento = ref({
  titulo: "",
  data: "",
  hora: "",
  tipo: "Esporte",
  modalidade: "Futsal",
});

// Função para calcular o índice do dia na grade com base na data
function getDiaIndex(dataStr) {
  const data = new Date(dataStr);
  const diaSemana = data.getDay(); // Domingo=0, Seg=1, Ter=2, ...
  if (diaSemana >= 1 && diaSemana <= 5) {
    return diaSemana - 1; // Seg=0 ... Sex=4
  }
  return null; // Data fora do intervalo Seg-Sex
}

function salvarEvento() {
  if (
    !novoEvento.value.titulo ||
    !novoEvento.value.data ||
    !novoEvento.value.hora
  ) {
    alert("Preencha todos os campos obrigatórios");
    return;
  }

  const diaIdx = getDiaIndex(novoEvento.value.data);
  if (diaIdx === null) {
    alert("A data deve ser um dia útil (Seg a Sex).");
    return;
  }

  eventos.value.push({
    ...novoEvento.value,
    diaIndex: diaIdx,
  });

  novoEvento.value = {
    titulo: "",
    data: "",
    hora: "",
    tipo: "Esporte",
    modalidade: "Futsal",
  };
  mostrarModal.value = false;
}

function calcularTop(horaStr) {
  const [h, m] = horaStr.split(":").map(Number);
  return (h - 8) * 40 + m * 0.66;
}

const eventosFiltrados = computed(() => {
  return eventos.value.filter((e) => {
    const dentroData = !filtros.value.data || e.data === filtros.value.data;
    const dentroInicio =
      !filtros.value.horaInicio || e.hora >= filtros.value.horaInicio;
    const dentroFim = !filtros.value.horaFim || e.hora <= filtros.value.horaFim;
    const tipoOk = !filtros.value.tipo || e.tipo === filtros.value.tipo;
    const modalidadeOk =
      !filtros.value.modalidade || e.modalidade === filtros.value.modalidade;

    return dentroData && dentroInicio && dentroFim && tipoOk && modalidadeOk;
  });
});

function eventosFiltradosByDia(diaIndex) {
  return eventosFiltrados.value.filter((e) => e.diaIndex === diaIndex);
}

function filtrarEventos() {
  console.log("Filtros aplicados:", filtros.value);
}

function limparFiltros() {
  filtros.value = {
    data: "",
    horaInicio: "",
    horaFim: "",
    tipo: "",
    modalidade: "",
  };
}
</script>

<style scoped>
.agenda-layout {
  display: flex;
  font-family: sans-serif;
}
.main-content {
  flex: 1;
}

/* Filtros */
.filters {
  display: flex;
  gap: 15px;
  padding: 20px;
  flex-wrap: wrap;
}
.filters label {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}
.btn-filtrar {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 18px;
  border-radius: 5px;
}
.btn-limpar {
  background: #dc3545;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 18px;
  border-radius: 5px;
}
.novo-agendamento {
  padding: 0 20px 20px;
}
.btn-novo {
  background: #004aad;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
}

/* Grade da agenda */
.calendar {
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 20px;
}

.calendar-header {
  display: grid;
  grid-template-columns: 80px repeat(5, 1fr);
  background: #f8f8f8;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
}
.calendar-header .day-col,
.calendar-header .time-col {
  padding: 10px;
  text-align: center;
  font-size: 0.95rem;
}

.calendar-grid {
  display: grid;
  grid-template-columns: 80px repeat(5, 1fr);
  height: 480px;
  overflow-y: auto;
  position: relative;
}

.time-col {
  background: #fafafa;
}
.time-slot {
  height: 40px;
  border-bottom: 1px solid #eee;
  font-size: 0.8rem;
  padding-left: 8px;
  display: flex;
  align-items: center;
}

.day-col {
  position: relative;
  border-left: 1px solid #f0f0f0;
}
.day-col .time-slot {
  height: 40px;
  border-bottom: 1px solid #eee;
}

.event {
  position: absolute;
  left: 10px;
  right: 10px;
  height: 38px;
  background: #90ee90;
  border-left: 4px solid #2e7d32;
  padding: 5px;
  font-size: 0.85rem;
  border-radius: 4px;
  z-index: 1;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.modal-content h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.3rem;
}
.modal-content label {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}
.modal-content input,
.modal-content select {
  padding: 8px;
  font-size: 0.9rem;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
}
.modal-actions button {
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.modal-actions button:first-child {
  background: #28a745;
  color: white;
}
.modal-actions button:last-child {
  background: #ccc;
}
</style>
