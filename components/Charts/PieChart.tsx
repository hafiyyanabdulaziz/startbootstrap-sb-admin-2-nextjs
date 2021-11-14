import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Direct", "Referral", "Social"],
  datasets: [
    {
      data: [55, 30, 15],
      backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
      hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

const options = {
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgb(255,255,255)",
      bodyColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      padding: 15,
      displayColors: false,
      caretPadding: 10,
    },
  },
};

const PieChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default PieChart;
