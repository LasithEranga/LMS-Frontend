import React from "react";
import courseLogo from "../../assests/course_logo.jpg";

const CardView = () => {
  return (
    <div className=" col-4 p-2 shadow ">
      <div>
        <img src={courseLogo} alt="" width={"100%"} />
      </div>
      <div>
        <hr />
      </div>
      <div>Module code - module name</div>
      <div>enroll btn</div>
    </div>
  );
};

export default CardView;
