import MainBlock from "./MainBlock";
import useFetch from "./useFetch";

function App() {
  const { get, post } = useFetch(
    "https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/"
  );

  return <MainBlock onHandleFetchGet={get} onHandleFetchPost={post} />;
}

export default App;
