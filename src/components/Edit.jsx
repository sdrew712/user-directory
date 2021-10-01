import React from "react";
import BottomNav from "./BottomNav";

const Edit = ({
  onEdit,
  currentUser,
  handlePrev,
  handleNext,
  setUsersData,
}) => {
  const { name, city, country, title, employer, favoriteMovies } = currentUser;
  const { first: firstName, last: lastName } = name;
  const [movie1, movie2, movie3] = favoriteMovies;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(e);
  };

  return (
    <div id="card-container">
      <form id="card" onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <b>Name:</b>
          <input id="firstname-input" value={firstName}></input>
          <input id="lastname-input" value={lastName}></input>
        </div>

        <div id="user-info">
          <div className="input">
            <b>From: </b>
            <input id={city} value={city}></input>
            <input value={country}></input>
          </div>

          <div className="input">
            <b>Job Title: </b>
            <input value={title}></input>
          </div>

          <div className="input">
            <b>Employer: </b>
            <input value={employer}></input>
          </div>
        </div>
        <div id="movies">
          <div>
            <b>Favorite Movies:</b>
          </div>
          <p className="input">
            1.
            <input value={movie1}></input>
          </p>
          <p className="input">
            2.
            <input value={movie2}></input>
          </p>
          <p className="input">
            3.
            <input value={movie3}></input>
          </p>
        </div>
        <button>Submit</button>
      </form>
      <BottomNav
        onPrev={handlePrev}
        onNext={handleNext}
        onEdit={onEdit}
        onDelete={() => {}}
        onNew={() => {}}
        editActionText={"Cancel"}
      />
    </div>
  );
};

export default Edit;
