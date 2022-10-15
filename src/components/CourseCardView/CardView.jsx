import React from "react";
import courseLogo from "../../assests/course_logo.jpg";

const CardView = ({ noOfCols = 4 }) => {
  return (
    <div className={`col-${noOfCols} p-2 shadow `}>
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
