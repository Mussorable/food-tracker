import { useState } from "react";
import { useEffect } from "react";
import AddFood from "./AddFood";
import Charts from "./Charts";

export default function MainBlock({
  onHandleFetchGet,
  onHandleFetchPost,
  onHandleFoodItems,
}) {
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [foodElements, setFoodElements] = useState();

  function setChartData(data) {
    Object.values(data).forEach((food) => {
      setTotalCarbs((prevValue) => prevValue + parseFloat(food.carbs));
      setTotalFat((prevValue) => prevValue + parseFloat(food.fat));
      setTotalProtein((prevValue) => prevValue + parseFloat(food.protein));
    });
  }

  useEffect(() => {
    console.log(foodElements);
  }, [foodElements]);

  useEffect(() => {
    onHandleFetchGet("foodlogs.json").then((data) => {
      setChartData(data);
    });
  }, []);

  useEffect(() => {
    if (totalCarbs && totalFat && totalProtein) {
      setFoodElements([totalCarbs, totalFat, totalProtein]);
    }
  }, [totalCarbs, totalFat, totalProtein]);

  return (
    <div className="container">
      <h1 className="heading--xl">Food tracker</h1>
      <div className="main-information-box">
        <AddFood
          onHandleFoodElements={setFoodElements}
          onHandleFoodItems={onHandleFoodItems}
          onHandleFetchGet={onHandleFetchGet}
          onHandleFetchPost={onHandleFetchPost}
        />
        <Charts foodElements={foodElements} />
      </div>
    </div>
  );
}
