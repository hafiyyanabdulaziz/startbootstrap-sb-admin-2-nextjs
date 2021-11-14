import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Revenue",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 10,
      right: 25,
      top: 25,
      bottom: 0,
    },
  },
  scales: {
    xAxes: [
      {
        time: {
          unit: "month",
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 6,
        },
        maxBarThickness: 25,
      },
    ],
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (context: any) {
            const number = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            }).format(context);
            return number;
          },
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2],
        },
      },
    ],
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgb(255,255,255)",
      bodyColor: "#858796", //tidak
      titleMarginBottom: 10,
      titleColor: "#6e707e",
      titleFont: { size: 14 },
      borderColor: "#dddfeb",
      borderWidth: 1,
      padding: 15, //tidak
      //   yPadding: 15, //tidak
      displayColors: false,
      intersect: false,
      mode: "index",
      caretPadding: 10,
      callbacks: {
        label: function (context: any) {
          let title = context.label || "";
          let label = context.dataset.label || "";

          if (title) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
};
const BarChart = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
