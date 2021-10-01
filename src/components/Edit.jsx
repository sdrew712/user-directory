import React from "react";
import BottomNav from "./BottomNav";

const Edit = ({
  onEdit,
  usersData,
  currentIndex,
  handlePrev,
  handleNext,
  editing,
}) => {
  const { name, city, country, title, employer, favoriteMovies } =
    usersData[currentIndex];
  const { first: firstName, last: lastName } = name;
  const [movie1, movie2, movie3] = favoriteMovies;

  return (
    <div id="card-container">
      <div id="card">
        <h1 id="user-name">
          {firstName} {lastName}
        </h1>
        <div id="user-info">
          <p>
            <b>
              From: {city} {country}
            </b>
          </p>
          <p>
            <b>Job Title: {title}</b>
          </p>
          <p>
            <b>Employer: {employer}</b>
          </p>
        </div>
        <div id="movies">
          <p>
            <b>Favorite Movies:</b>
          </p>
          <ol>
            <li>{movie1}</li>
            <li>{movie2}</li>
            <li>{movie3}</li>
          </ol>
        </div>
      </div>
      <BottomNav
        onPrev={handlePrev}
        onNext={handleNext}
        onEdit={onEdit}
        onDelete={() => {}}
        onNew={() => {}}
        EditActionText={editing ? "Cancel" : "Edit"}
      />
    </div>
  );
};

export default Edit;
