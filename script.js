const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [{
      label: "Revenue",
      data: [3000, 5000, 4000, 7000, 9000, 14000],
      borderColor: "blue",
      fill: false
    }]
  }
});
