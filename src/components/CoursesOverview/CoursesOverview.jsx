import React from "react";
import { Link } from "react-router-dom";
import CardView from "../CourseCardView/CardView";

const CoursesOverview = () => {
  return (
    <div className="px-3">
      <div className="d-flex justify-content-between ">
        <div className="fs-3 fw-semibold">Courses Overview</div>
        <div>
          <Link to={"courses"}>View All</Link>
        </div>
      </div>
      <div className="d-flex gap-2">
        <CardView />
        <CardView />
        <CardView />
      </div>
    </div>
  );
};

export default CoursesOverview;
