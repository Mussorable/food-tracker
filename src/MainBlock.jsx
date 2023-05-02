import { useEffect } from "react";
import AddFood from "./AddFood";
import Charts from "./Charts";

export default function MainBlock({ onHandleFetchGet, onHandleFetchPost }) {
  return (
    <div className="container">
      <h1 className="heading--xl">Food tracker</h1>
      <div className="main-information-box">
        <AddFood
          onHandleFetchGet={onHandleFetchGet}
          onHandleFetchPost={onHandleFetchPost}
        />
        <Charts />
      </div>
    </div>
  );
}
