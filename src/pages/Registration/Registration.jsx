import React from "react";
import { Form } from "react-bootstrap";
import InputGroup from "../../components/InputGroup";

function Registration() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div>image</div>
      <div>
        <h4>Enter Your Details</h4>
        <div className="d-flex gap-2 ">
          <InputGroup label={"First name"} id="firstName" type="text" />
          <InputGroup label={"Last name"} id="firstName" type="text" />
        </div>

        <InputGroup label={"Email"} id="firstName" type="text" />
        <InputGroup label={"Username"} id="firstName" type="text" />
        <InputGroup label={"Password"} id="firstName" type="password" />
        <InputGroup label={"Confirm Password"} id="firstName" type="password" />
      </div>
    </div>
  );
}

export default Registration;
