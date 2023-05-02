import Chart from "chart.js/auto";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Charts({ foodElements }) {
  const canvasRef = useRef();

  useEffect(() => {
    if (foodElements) {
      new Chart(canvasRef.current, {
        type: "doughnut",
        data: {
          labels: ["Carbs", "Protein", "Fat"],
          datasets: [
            {
              data: foodElements,
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
      });
    }
  }, [foodElements]);

  return (
    <div className="chartbox">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
