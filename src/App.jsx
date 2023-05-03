import MainBlock from "./MainBlock";
import DailyLogs from "./DailyLogs";
import useFetch from "./useFetch";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([]);
  const { get, post } = useFetch(
    "https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/"
  );

  return (
    <main>
      <MainBlock
        onHandleFoodItems={setFoodItems}
        onHandleFetchGet={get}
        onHandleFetchPost={post}
      />
      <DailyLogs
        foodItems={foodItems}
        onHandleFoodItems={setFoodItems}
        onHandleFetchGet={get}
      />
    </main>
  );
}

export default App;
