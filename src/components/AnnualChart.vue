<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const chartData = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  datasets: [
    {
      label: "2025",
      data: [200, 300, 500, 600, 620, 580, 610, 700, 640, 660, 720, 950],
      borderColor: "#1976d2",
      backgroundColor: "#1976d2",
      tension: 0.3,
    },
    {
      label: "2024",
      data: [180, 250, 450, 500, 520, 500, 540, 600, 580, 600, 680, 900],
      borderColor: "#81c784",
      backgroundColor: "#81c784",
      tension: 0.3,
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
