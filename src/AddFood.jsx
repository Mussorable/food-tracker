import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./useFetch";
import Input from "./components/Input";

export default function AddFood({ onHandleFetchGet, onHandleFetchPost }) {
  const [foodName, setFoodName] = useState("");
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [food, setFood] = useState();

  useEffect(() => {
    onHandleFetchGet("foods.json").then((data) => setFood(Object.keys(data)));
    onHandleFetchGet("foodlogs.json").then((data) => console.log(data));
  }, []);

  function resetForm() {
    setFoodName("");
    setCarbs("");
    setProtein("");
    setFat("");
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    onHandleFetchPost("foodlogs.json", {
      foodName,
      carbs,
      protein,
      fat,
    }).catch((error) => console.error(error));
    resetForm();
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleFormSubmit}>
        <label className="sr-only" htmlFor="food-select">
          Food name
        </label>
        <select
          value={foodName}
          onChange={(event) => setFoodName(event.target.value)}
          className="select"
          id="food-select"
        >
          <option value="">Select a food</option>
          {food &&
            food.map((food, index) => (
              <option key={index} value={food}>
                {food}
              </option>
            ))}
        </select>
        <label className="sr-only" htmlFor="carbs-field">
          Carbs
        </label>
        <Input
          onChange={(event) => setCarbs(event.target.value)}
          value={carbs}
          id="carbs-field"
          placeholder="Carbs"
          type="number"
        />
        <label className="sr-only" htmlFor="protein-field">
          Protein
        </label>
        <Input
          onChange={(event) => setProtein(event.target.value)}
          value={protein}
          id="protein-field"
          placeholder="Protein"
          type="number"
        />
        <label className="sr-only" htmlFor="fat-field">
          Fat
        </label>
        <Input
          onChange={(event) => setFat(event.target.value)}
          value={fat}
          id="fat-field"
          placeholder="Fat"
          type="number"
        />
        <button className="button" type="submit">
          Add Food
        </button>
      </form>
    </div>
  );
}
