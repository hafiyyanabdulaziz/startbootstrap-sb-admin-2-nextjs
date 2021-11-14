import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Earnings",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [
        0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000,
        40000,
      ],
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
    x: {
      //tidak
      //   time: {
      //     unit: "date",
      //   },
      //   gridLines: {
      //     display: false,
      //     drawBorder: false,
      //   },
      ticks: {
        maxTicksLimit: 7,
      },
    },

    y: {
      ticks: {
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
      //tidak
      gridLines: {
        color: "rgb(234, 236, 244)",
        zeroLineColor: "rgb(234, 236, 244)",
        drawBorder: false,
        borderDash: [2],
        zeroLineBorderDash: [2],
      },
    },
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

const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
