const ctx = document.getElementById("statsChart").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Heures de travail", "Heures de sommeil", "Langages codés"],
    datasets: [{
      label: "Stats Hebdomadaires",
      data: [45, 50, 5],
      backgroundColor: ["#00a6fb", "#f77f00", "#fcbf49"]
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } }
  }
});
