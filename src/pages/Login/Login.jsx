import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { apiManager } from "../../app/apiManager";
import sideImage from "../../assests/lms_side_image.jpg";
import InputGroup from "../../components/InputGroup";
import ToastMessage from "../../components/ToastMessage";
function Login() {
  const [alert, setAlert] = useState({
    isVisible: false,
    message: "",
  });
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const onSubmitClickHandler = () => {
    s;
    apiManager("POST", "/auth/login", userInfo);
  };

  return (
    <div className="vh-100 d-flex  bg-dark">
      <ToastMessage show={alert} setShow={setAlert} />
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
          <h3>Login</h3>
          <h6 className="text-form-text">Enter Your Details</h6>
          <div className="d-flex gap-2 "></div>

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

export default Login;
