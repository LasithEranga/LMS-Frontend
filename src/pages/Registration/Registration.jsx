import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiManager } from "../../app/apiManager";
import sideImage from "../../assests/lms_side_image.jpg";
import InputGroup from "../../components/InputGroup";
import ToastMessage from "../../components/ToastMessage";
function Registration() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    isVisible: false,
    message: "",
  });
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
    let response = apiManager("/auth/signup", userInfo, true, "POST");
    response.then((data) => {
      navigate("/login");
    });
    //
  };

  return (
    <div className="vh-100 d-flex  bg-dark">
      <ToastMessage show={alert} setShow={setAlert} />
      <div className="shadow-sm d-flex justify-content-center align-items-center col-12 ">
        <div
          className="col-4 rounded-start"
          style={{
            height: "38.4rem",
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
          <div>
            <div className=" text-form-text pt-2">I am a</div>
            <select
              className="form-control my-2 py-2"
              onChange={(event) => {
                setUserInfo({
                  ...userInfo,
                  role: event.target.value,
                });
              }}
            >
              <option value={"lecturer"}>Lecturer</option>
              <option value={"student"}>Student</option>
            </select>
          </div>

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
