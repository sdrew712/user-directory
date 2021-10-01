import "./index.css";
import TopBar from "./components/TopBar";
import Card from "./components/Card";
import initialData from "./db.json";
import { useState } from "react";

function App() {
  const [usersData, setUsersData] = useState(initialData);
  console.log(usersData);

  return (
    <>
      <TopBar />
      <Card usersData={usersData} setUsersData={setUsersData} />
    </>
  );
}

export default App;
