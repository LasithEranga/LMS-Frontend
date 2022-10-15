import React from "react";
import CoursesOverview from "../../components/CoursesOverview/CoursesOverview";
import RecentlyViewed from "../../components/RecentlyViewed/RecentlyViewed";
import UpcommingActivities from "../../components/UpcommingActivities/UpcommingActivities";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <div className="col-8">
        <RecentlyViewed />
        <CoursesOverview />
      </div>
      <div className="col">
        <UpcommingActivities />
      </div>
    </div>
  );
};

export default Dashboard;
