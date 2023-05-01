import Chart from "chart.js/auto";
import { useRef } from "react";
import { useEffect } from "react";

export default function Charts() {
  const canvasRef = useRef();

  useEffect(() => {
    new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        labels: ["Carbs", "Protein", "Fat"],
        datasets: [
          {
            data: [100, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 30,
          },
        ],
      },
    });
  }, []);

  return (
    <div className="chartbox">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
