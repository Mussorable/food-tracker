import { useEffect } from "react";
import { useState } from "react";
import Input from "./components/Input";
import useFetch from "./useFetch";
import Charts from "./Charts";

export default function AddFood(props) {
  const [foodName, setFoodName] = useState("");
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const { get, post } = useFetch(
    "https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/"
  );
  const [food, setFood] = useState();

  function resetForm() {
    setFoodName("");
    setCarbs("");
    setProtein("");
    setFat("");
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    post("foodlogs.json", {
      foodName,
      carbs,
      protein,
      fat,
    }).catch((error) => console.error(error));
    resetForm();
  }

  useEffect(() => {
    get("foods.json").then((data) => setFood(Object.keys(data)));
    get("foodlogs.json").then((data) => console.log(data));
  }, []);

  return (
    <div className="container">
      <h2>Add food</h2>
      <div className="form-box">
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
        <Charts />
      </div>
    </div>
  );
}
