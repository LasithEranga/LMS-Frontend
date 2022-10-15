import React from "react";
import courseLogo from "../../assests/course_logo.jpg";

const CardView = () => {
  return (
    <div class="d-flex shadow-sm col-11">
      <div class="col-3 bg-success my-2 ">
        <img src={courseLogo} alt="" width={"100%"} />
      </div>
      <div class="col-9 ps-3">
        <h2> Software Engineering Concepts </h2>
        <p> Semester 1 , Year 3 | DR.Dilani Wickramaarachchi</p>
        <button class="btn">Enroll</button>
      </div>
    </div>
  );
};

export default CardView;
