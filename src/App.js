import "./styles.css";
import TopBar from "./components/TopBar";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <>
      <TopBar />

      {data.map((data) => (
        <Card
          firstName={data.name.first}
          lastName={data.name.last}
          city={data.city}
          country={data.country}
          title={data.title}
          employer={data.employer}
          movie1={data.favoriteMovies[0]}
          movie2={data.favoriteMovies[1]}
          movie3={data.favoriteMovies[2]}
        />
      ))}
    </>
  );
}

export default App;
