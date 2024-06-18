import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const ChartBuilder = ({ id, advance }) => {
  // console.log(id);
  useEffect(() => {
    const options = {
      chart: {
        height: 150,
        type: "radialBar",
      },
      series: [advance],
      colors: ["#20E647"],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "60%",
            background: "#293450",
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15,
            },
          },
          dataLabels: {
            name: {
              //   offsetY: 10,
              color: "#fff",
              fontSize: "12px",
              show: false,
            },
            value: {
              offsetY: 5,
              color: "#fff",
              fontSize: "15px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ["#87D4F9"],
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Progreso"],
    };

    const chart = new ApexCharts(document.getElementById(id), options); // Use getElementById with provided id
    chart.render();

    // Cleanup function to destroy the chart on component unmount
    return () => {
      chart.destroy();
    };
  }, [id]); // Empty dependency array to ensure this effect runs only once after initial render

  return <div id={id}></div>;
};

export default ChartBuilder;
