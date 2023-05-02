import { useEffect, useState } from "react";

export default function DailyLogs({
  onHandleFetchGet,
  onHandleFoodItems,
  foodItems,
}) {
  useEffect(() => {
    onHandleFetchGet("foodlogs.json").then((data) => {
      Object.values(data).forEach((food) => {
        onHandleFoodItems((prevValue) => [...prevValue, food]);
      });
    });
  }, []);

  useEffect(() => {
    console.log(foodItems);
  }, [foodItems]);

  return (
    <div className="container">
      <h2>Daily Logs</h2>
      <div className="daily-logs-box">
        {foodItems &&
          foodItems.map((food, index) => {
            return (
              <div key={index} className="food-item">
                <h3>{food.foodName}</h3>
                <div className="food-values">
                  <div>
                    <p>Carbs</p>
                    <p>{food.carbs}</p>
                  </div>
                  <div>
                    <p>Fat</p>
                    <p>{food.fat}</p>
                  </div>
                  <div>
                    <p>Protein</p>
                    <p>{food.protein}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
