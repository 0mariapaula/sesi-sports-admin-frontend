<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
  datasets: [
    {
      label: "2025",
      data: [120, 150, 180, 130, 200, 250, 300],
      backgroundColor: "#1976d2",
    },
    {
      label: "2024",
      data: [100, 130, 160, 120, 180, 210, 260],
      backgroundColor: "#90caf9",
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};
</script>
