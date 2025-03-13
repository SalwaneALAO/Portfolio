const histograms = {};

function createHistogram(canvasId, labels, data) {
  const ctx = document.querySelector(`#${canvasId} canvas`).getContext("2d");

  if (!histograms[canvasId]) {
    histograms[canvasId] = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Developed Skills",
          data: data,
          backgroundColor: ["#00a6fb", "#4caf50", "#ff6347", "#fcbf49"],
          borderRadius: 5,
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }
}

function showHistogram(chartId) {
  const chartContainer = document.getElementById(chartId);
  chartContainer.style.display = "block";

  // Définition des données pour chaque bloc
  if (chartId === "chart1") {
    createHistogram(chartId, ["Python", "SQL", "Excel"], [50, 30, 20]);
  } else if (chartId === "chart2") {
    createHistogram(chartId, ["Analysis", "Reporting", "Visualization"], [40, 35, 25]);
  } else if (chartId === "chart3") {
    createHistogram(chartId, ["Gestion", "Maintenance", "Optimisation"], [60, 25, 15]);
  } else if (chartId === "chart4") {
    createHistogram(chartId, ["Development", "Accessibility", "Collaboration"], [45, 30, 25]);
  }
}

function hideHistogram(chartId) {
  const chartContainer = document.getElementById(chartId);
  chartContainer.style.display = "none";
}
