import React from "react";
import courseLogo from "../../assests/course_logo.jpg";

const CardView = ({ moduleCode, moduleName, noOfCols = 4 }) => {
  return (
    <div className={`col-12 col-lg-${noOfCols} p-2 shadow `}>
      <div>
        <img src={courseLogo} alt="" width={"100%"} />
      </div>
      <div>
        <hr />
      </div>
      <div className="text-secondary fw-semibold">
        {moduleCode} - {moduleName}
      </div>
      <div className="d-flex justify-content-end">
        <span
          className=" px-4 rounded-2 py-1 text-primary fw-semibold "
          role={"button"}
        >
          View
        </span>
      </div>
    </div>
  );
};

export default CardView;
