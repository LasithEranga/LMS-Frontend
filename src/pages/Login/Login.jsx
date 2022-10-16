import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { apiManager } from "../../app/apiManager";

import InputGroup from "../../components/InputGroup";
import ToastMessage from "../../components/ToastMessage";
import { login } from "../../reducers/loginSlice";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    let userDetails = apiManager("/auth/login", userInfo, false, "POST");

    userDetails.then((data) => {
      console.log(data);
      dispatch(
        login({
          userid: data.id,
          username: data.username,
          role: data.roles,
          token: data.token,
        })
      );
      navigate("/dashboard");
    });
  };
  return (
    <div className="vh-100 d-flex  bg-dark">
      <ToastMessage show={alert} setShow={setAlert} />
      <div className="shadow-sm d-flex justify-content-center align-items-center col-12 ">
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

          <div className="pt-2 ">
            Dont have an account? <Link to={"/sign-up"}>Sign up</Link>
          </div>

          {/* action buttons---------------------------- */}

          <div className="d-flex justify-content-end gap-2 mt-3">
            <Button className="px-4 bg-secondary">Clear</Button>
            <Button className="px-4 bg-btns" onClick={onSubmitClickHandler}>
              Login
            </Button>
          </div>

          {/* action buttons---------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default Login;
