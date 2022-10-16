import React from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert } from "../reducers/alertSlice";

const sx = {
  borderRadius: "5px",
  bottom: "25px",
  right: "25px",
};

function ToastMessage({ show, setShow }) {
  const alertState = useSelector((state) => state.newAlert);
  const dispatch = useDispatch();

  return (
    <>
      <Toast
        onClose={() => {
          dispatch(hideAlert());
        }}
        show={alertState.isVisible}
        delay={3000}
        autohide
        className="position-absolute d-flex justify-content-between p-3 pe-2"
        style={sx}
      >
        <div>{alertState.message}</div>
        <button
          className="btn-close btn-feature"
          onClick={() => {
            dispatch(hideAlert());
          }}
        ></button>
      </Toast>
    </>
  );
}

export default ToastMessage;
