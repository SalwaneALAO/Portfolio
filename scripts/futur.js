const futureCtx = document.getElementById("futureChart").getContext("2d");

new Chart(futureCtx, {
  type: "line",
  data: {
    labels: ["2024", "2025", "2026", "2027", "2028"],
    datasets: [{
      label: "Projets Accomplis",
      data: [10, 20, 40, 70, 100],
      borderColor: "#00a6fb",
      backgroundColor: "rgba(0, 166, 251, 0.2)",
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: { title: { display: true, text: "Projection de mes Projets" } }
  }
});
