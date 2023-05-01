import Input from "./components/Input";

export default function AddFood(props) {
  return (
    <div className="container">
      <h2>Add food</h2>
      <div className="form-box">
        <form>
          <label className="sr-only" htmlFor="food-select">
            Food name
          </label>
          <select className="select" id="food-select">
            <option value="">Select a food</option>
            <option value="">Pizza</option>
            <option value="">Soup</option>
            <option value="">Salad</option>
            <option value="">Apple</option>
          </select>
          <label className="sr-only" htmlFor="carbs-field">
            Carbs
          </label>
          <Input id="carbs-field" placeholder="Carbs" type="number" />
          <label className="sr-only" htmlFor="protein-field">
            Protein
          </label>
          <Input id="protein-field" placeholder="Protein" type="number" />
          <label className="sr-only" htmlFor="fat-field">
            Fat
          </label>
          <Input id="fat-field" placeholder="Fat" type="number" />
          <button className="button" type="submit">
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
}
