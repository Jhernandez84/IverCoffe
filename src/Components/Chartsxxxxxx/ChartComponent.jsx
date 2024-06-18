import React, { useEffect } from "react";
import dynamic from 'next/dynamic'; // Import dynamic from Next.js

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false }); // Dynamically import ApexCharts with SSR disabled

export const DBChart = ({
  ChartType,
  ChartData,
  ChartId,
  ChartWidth,
  ChartTitle,
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') { // Check if window is defined
      const options = {
        series: [
          {
            data: ChartData.map((item) => parseInt(item.qty, 10)),
          },
        ],
        chart: {
          type: ChartType || 'bar', // Fixed missing quotes around 'bar'
          height: "90%",
          // width: "90%",
          style: {
            colors: ["#ffffff"],
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ["#ffffff"], // Color blanco para el texto
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: ChartData.map((item) => item.date),
          labels: {
            style: {
              colors: "#ffffff", // Color blanco para el texto del eje
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#ffffff", // Color blanco para el texto del eje Y
            },
          },
        },
      };


      
      const chart = new ApexCharts(document.querySelector(`#${ChartId}`), options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [ChartData, ChartId, ChartType, ChartTitle]); // Include dependencies in the dependency array

  return (
    <>
      <div className="chart-container">
        <div className="chart-inner-border">
          <div className="chart-header">
            <p className="chart-title">{ChartTitle}</p>
            <div className="chart-options">
              <div>
                <select
                  className="chart-options-selector"
                  id="chartOption"
                  name="chartOption"
                >
                  <option value="volvo">Opción 1</option>
                  <option value="saab">Opción 2</option>
                  <option value="saab">Opción 3</option>
                  <option value="saab">Opción 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="chart-render" id={ChartId}></div>
        </div>
      </div>
    </>
  );
};

export default DBChart;
