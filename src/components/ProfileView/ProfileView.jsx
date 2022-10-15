import React from "react";

const ProfileView = () => {
  return (
    <div className="col-12 d-flex mt-3">
      <div className="col-3 bg-dark"></div>
      <div className="col-8 ps-3 fs-4">
        <div> Student Name</div>
        <div> Address</div>
        <div> Email</div>
        <div> Useranme</div>
        <div className="d-flex">
          <div>Password</div>
          <div>Change Password</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
