// components/MyChart.js
import "./CBStyles.css";

import { Line, Bar, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyChart = ({ chrTitle, chrDataLabel }) => {

  // const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-header-color-dark').trim();
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color-light').trim();

 const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: chrDataLabel,
        backgroundColor: bgColor,
        borderColor: "rgba(75,192,192,1)",
        data: [1, 59, 80, 81, 56, 55, 100],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This ensures the chart resizes dynamically
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chrTitle,
      },
    },
    layout: {
      backgroundColor: bgColor, // Setting the chart area background color
    },
  };

  return (
    <div
      className="chart-container"
      style={{ position: "relative", height: "90%", width: "90%" }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default MyChart;
