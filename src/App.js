import "./styles.css";
import TopBar from "./components/TopBar";
import Card from "./components/Card";
import usersData from "./data";

function App() {
  return (
    <>
      <TopBar />
      <Card usersData={usersData} />
    </>
  );
}

export default App;
