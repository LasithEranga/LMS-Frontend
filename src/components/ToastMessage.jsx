import React from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert, resetMessage } from "../reducers/alertSlice";

const sx = {
  borderRadius: "5px",
  bottom: "25px",
  left: "75vw",
  width: "20rem",
  zIndex: 500,
};

function ToastMessage({ show, setShow }) {
  const alertState = useSelector((state) => state.newAlert);
  const dispatch = useDispatch();

  return (
    <>
      <Toast
        onClose={() => {
          dispatch(hideAlert());
          dispatch(resetMessage());
        }}
        autohide
        show={alertState.isVisible}
        delay={3000}
        className="position-absolute d-flex justify-content-between p-3 pe-2 "
        style={sx}
      >
        <div>{alertState.message}</div>
        <button
          className="btn-close btn-feature"
          onClick={() => {
            dispatch(hideAlert());
            dispatch(resetMessage());
          }}
        ></button>
      </Toast>
    </>
  );
}

export default ToastMessage;
