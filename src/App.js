import "./styles.css";
import TopBar from "./components/TopBar";
import Card from "./components/Card";
import api from "./api/users";
import { useEffect, useState } from "react";

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await api.get("/users");
        setUsersData(data);
      } catch (e) {
        if (e.response) {
          console.log(e.response.data);
          console.log(e.response.status);
          console.log(e.response.headers);
        } else {
          console.log(e.message);
        }
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <TopBar />
      {usersData.length > 1 ? (
        <Card usersData={usersData} />
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default App;
