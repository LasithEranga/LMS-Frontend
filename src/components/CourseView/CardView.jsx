import React from "react";
import courseLogo from "../../assests/course_logo.jpg";

const CardView = ({ courseName, semester, year, lecturer, onclick }) => {
  return (
    <div className="d-flex shadow-sm col-11">
      <div className="col-3  my-2 ">
        <img src={courseLogo} alt="" width={"100%"} />
      </div>
      <div className="col-9 ps-3">
        <h2> {courseName} </h2>
        <p>
          {semester} , {year} | {lecturer}
        </p>
        <button className="btn" onClick={onclick}>
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CardView;
