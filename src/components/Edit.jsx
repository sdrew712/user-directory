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
      <form id="card">
        <div className="input">
          <b>Name:</b>
          <textarea
            id="firstname-input"
            cols={20}
            rows={1}
            placeholder={firstName}
          ></textarea>
          <textarea
            id="lastname-input"
            cols={20}
            rows={1}
            placeholder={lastName}
          ></textarea>
        </div>

        <div id="user-info">
          <div className="input">
            <b>From: </b>
            <textarea
              id={city}
              cols={20}
              rows={1}
              placeholder={city}
            ></textarea>
            <textarea cols={20} rows={1} placeholder={country}></textarea>
          </div>

          <div className="input">
            <b>Job Title: </b>
            <textarea cols={30} rows={1} placeholder={title}></textarea>
          </div>

          <div className="input">
            <b>Employer: </b>
            <textarea cols={30} rows={1} placeholder={employer}></textarea>
          </div>
        </div>
        <div id="movies">
          <div>
            <b>Favorite Movies:</b>
          </div>
          <li className="input">
            <p>1.</p>
            <textarea cols={30} rows={1} placeholder={movie1}></textarea>
          </li>
          <li className="input">
            <p>2.</p>
            <textarea cols={30} rows={1} placeholder={movie2}></textarea>
          </li>
          <li className="input">
            <p>3.</p>
            <textarea cols={30} rows={1} placeholder={movie3}></textarea>
          </li>
        </div>
        <button>Submit</button>
      </form>
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
