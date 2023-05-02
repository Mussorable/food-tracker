import MainBlock from "./MainBlock";
import DailyLogs from "./DailyLogs";
import useFetch from "./useFetch";

function App() {
  const { get, post } = useFetch(
    "https://pet-hotel-375a8-default-rtdb.europe-west1.firebasedatabase.app/"
  );

  return (
    <main>
      <MainBlock onHandleFetchGet={get} onHandleFetchPost={post} />
      <DailyLogs onHandleFetchGet={get} />
    </main>
  );
}

export default App;
