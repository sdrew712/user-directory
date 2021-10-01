import React, { useState } from "react";
import BottomNav from "./BottomNav";

const Edit = ({
  onEdit,
  currentUser,
  handlePrev,
  handleNext,
  setUsersData,
}) => {
  const [firstName, setFirstName] = useState(currentUser.name.first);
  const [lastName, setLastName] = useState(currentUser.name.last);
  const [city, setCity] = useState(currentUser.city);
  const [country, setCountry] = useState(currentUser.country);
  const [title, setTitle] = useState(currentUser.title);
  const [employer, setEmployer] = useState(currentUser.employer);
  const [movie1, setMovie1] = useState(currentUser.favoriteMovies[0]);
  const [movie2, setMovie2] = useState(currentUser.favoriteMovies[1]);
  const [movie3, setMovie3] = useState(currentUser.favoriteMovies[2]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div id="card-container">
      <form id="card" onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <b>Name:</b>
          <input
            id="firstname-input"
            value={firstName}
            onChange={({ target }) => {
              setFirstName(target.value);
            }}
          ></input>
          <input
            id="lastname-input"
            value={lastName}
            onChange={({ target }) => {
              setLastName(target.value);
            }}
          ></input>
        </div>

        <div id="user-info">
          <div className="input">
            <b>From: </b>
            <input
              value={city}
              onChange={({ target }) => {
                setCity(target.value);
              }}
            ></input>
            <input
              value={country}
              onChange={({ target }) => {
                setCountry(target.value);
              }}
            ></input>
          </div>

          <div className="input">
            <b>Job Title: </b>
            <input
              value={title}
              onChange={({ target }) => {
                setTitle(target.value);
              }}
            ></input>
          </div>

          <div className="input">
            <b>Employer: </b>
            <input
              value={employer}
              onChange={({ target }) => {
                setEmployer(target.value);
              }}
            ></input>
          </div>
        </div>
        <div id="movies">
          <div>
            <b>Favorite Movies:</b>
          </div>
          <p className="input">
            1.
            <input
              value={movie1}
              onChange={({ target }) => {
                setMovie1(target.value);
              }}
            ></input>
          </p>
          <p className="input">
            2.
            <input
              value={movie2}
              onChange={({ target }) => {
                setMovie2(target.value);
              }}
            ></input>
          </p>
          <p className="input">
            3.
            <input
              value={movie3}
              onChange={({ target }) => {
                setMovie3(target.value);
              }}
            ></input>
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
