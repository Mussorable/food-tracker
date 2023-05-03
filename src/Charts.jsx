import Chart from "chart.js/auto";
import { useRef } from "react";
import { useEffect, useState } from "react";

export default function Charts({ foodElements }) {
  const canvasRef = useRef();
  const [chartInstance, setChartInstance] = useState();

  function renderChart(foodData) {
    if (chartInstance) {
      setChartInstance(chartInstance.destroy());
    }

    setChartInstance(
      new Chart(canvasRef.current, {
        type: "doughnut",
        data: {
          labels: ["Carbs", "Protein", "Fat"],
          datasets: [
            {
              data: foodData,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 30,
            },
          ],
        },
        options: {
          responsive: true,
        },
      })
    );
  }

  useEffect(() => {
    if (foodElements) {
      renderChart(foodElements);
      // const chart = new Chart(canvasRef.current, {
      //   type: "doughnut",
      //   data: {
      //     labels: ["Carbs", "Protein", "Fat"],
      //     datasets: [
      //       {
      //         data: foodElements,
      //         backgroundColor: [
      //           "rgb(255, 99, 132)",
      //           "rgb(54, 162, 235)",
      //           "rgb(255, 205, 86)",
      //         ],
      //         hoverOffset: 30,
      //       },
      //     ],
      //   },
      //   options: {
      //     responsive: true,
      //   },
      // });
    }
  }, [foodElements]);

  return (
    <div className="chartbox">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
