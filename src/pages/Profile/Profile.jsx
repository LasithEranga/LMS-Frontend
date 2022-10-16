import React from "react";
import CardView from "../../components/CourseCardView/CardView";
import ProfileView from "../../components/ProfileView/ProfileView";

const Profile = () => {
  return (
    <div className="ps-4">
      <div className=" pt-3 fs-3 fw-semibold">Profile</div>
      <ProfileView />

      <div className=" pt-3 fs-3 fw-semibold">Enrolled Courses</div>
      <div
        className="d-flex gap-2  pb-3"
        style={{ width: "100%", overflowX: "auto" }}
      >
        <CardView noOfCols={2} />
        <CardView noOfCols={2} />
        <CardView noOfCols={2} />
        <CardView noOfCols={2} />
        <CardView noOfCols={2} />
        <CardView noOfCols={2} />
      </div>
    </div>
  );
};

export default Profile;
