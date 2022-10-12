import React from "react";
import { Button, Form } from "react-bootstrap";
import InputGroup from "../../components/InputGroup";
import sideImage from "../../assests/lms_side_image.jpg";
function Registration() {
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
            <InputGroup label={"First name"} id="firstName" type="text" />
            <InputGroup label={"Last name"} id="firstName" type="text" />
          </div>

          <InputGroup label={"Email"} id="firstName" type="text" />
          <InputGroup label={"Username"} id="firstName" type="text" />
          <InputGroup label={"Password"} id="firstName" type="password" />
          <InputGroup
            label={"Confirm Password"}
            id="firstName"
            type="password"
          />

          {/* action buttons---------------------------- */}

          <div className="d-flex justify-content-end gap-2 mt-3">
            <Button className="px-4 bg-secondary">Clear</Button>
            <Button className="px-4 bg-btns">Save</Button>
          </div>

          {/* action buttons---------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default Registration;
