import React, { useState } from "react";
import { Button } from "react-bootstrap";
import sideImage from "../../assests/lms_side_image.jpg";
import InputGroup from "../../components/InputGroup";
function Registration() {
  const [userInfo, setUserInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const onChangeHandler = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const onSubmitClickHandler = () => {
    fetch("url", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="vh-100 d-flex  bg-dark">
      <div className="shadow-sm d-flex justify-content-center align-items-center col-12 ">
        <div
          className="col-4 rounded-start"
          style={{
            height: "32.95rem",
            backgroundImage: `url(${sideImage})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="col-4 border border-1 p-3 bg-light rounded-end">
          <h3>User Registration</h3>
          <h6 className="text-form-text">Enter Your Details</h6>
          <div className="d-flex gap-2 ">
            <InputGroup
              label={"First name"}
              id="fname"
              type="text"
              name="fname"
              value={userInfo.fname}
              onchange={onChangeHandler}
            />
            <InputGroup
              label={"Last name"}
              id="lname"
              type="text"
              name="lname"
              value={userInfo.lname}
              onchange={onChangeHandler}
            />
          </div>

          <InputGroup
            label={"Email"}
            id="email"
            type="text"
            name="email"
            value={userInfo.email}
            onchange={onChangeHandler}
          />
          <InputGroup
            label={"Username"}
            id="username"
            type="text"
            name="username"
            value={userInfo.username}
            onchange={onChangeHandler}
          />
          <InputGroup
            label={"Password"}
            id="password"
            type="password"
            name="password"
            value={userInfo.password}
            onchange={onChangeHandler}
          />
          <InputGroup
            label={"Confirm Password"}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={userInfo.confirmPassword}
            onchange={onChangeHandler}
          />

          {/* action buttons---------------------------- */}

          <div className="d-flex justify-content-end gap-2 mt-3">
            <Button className="px-4 bg-secondary">Clear</Button>
            <Button className="px-4 bg-btns" onClick={onSubmitClickHandler}>
              Save
            </Button>
          </div>

          {/* action buttons---------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default Registration;
