import React from "react";
import { Link } from "react-router-dom";

const CardView = () => {
  return (
    <div className=" my-2 p-2 bg-light shadow-sm border-1 d-flex justify-content-between rounded-1">
      <div className=" col-10">
        <div>Activity</div>
        <div>Activity</div>
      </div>

      <div className="col d-flex justify-content-center align-items-center">
        <Link> View </Link>
      </div>
    </div>
  );
};

export default CardView;
