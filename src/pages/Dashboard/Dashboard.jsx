import React from "react";
import CoursesOverview from "../../components/CoursesOverview/CoursesOverview";
import RecentlyViewed from "../../components/RecentlyViewed/RecentlyViewed";

const Dashboard = () => {
  return (
    <div>
      <RecentlyViewed />
      <CoursesOverview />
    </div>
  );
};

export default Dashboard;
