import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiManager } from "../../app/apiManager";

const ProfileView = ({ name, email, username }) => {
  return (
    <div className="col-12 d-flex mt-3">
      <div className="col-3 bg-dark" style={{ height: "12rem" }}></div>
      <div className="col-8 ps-3 fs-4">
        <div> Student Name: {name}</div>
        <div> Student Email : {email}</div>
        <div> Username : {username}</div>
      </div>
    </div>
  );
};

export default ProfileView;
