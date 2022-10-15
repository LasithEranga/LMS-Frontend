import React from "react";
import CardView from "../CourseCardView/CardView";

const RecentlyViewed = () => {
  return (
    <div className="p-3">
      <div className="fs-3 fw-semibold">Recently Viewd</div>
      <div className="d-flex gap-2">
        <CardView />
        <CardView />
        <CardView />
      </div>
    </div>
  );
};

export default RecentlyViewed;
