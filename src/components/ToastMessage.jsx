import React from "react";
import Toast from "react-bootstrap/Toast";

const sx = {
  borderRadius: "5px",
  bottom: "25px",
  right: "25px",
};

function ToastMessage({ show, setShow }) {
  return (
    <>
      <Toast
        onClose={() => setShow({ ...show, isVisible: false })}
        show={show.isVisible}
        delay={3000}
        autohide
        className="position-absolute d-flex justify-content-between p-3 pe-2"
        style={sx}
      >
        <div>{show.message}</div>
        <button
          className="btn-close btn-feature"
          onClick={() => setShow(setShow({ ...show, isVisible: false }))}
        ></button>
      </Toast>
    </>
  );
}

export default ToastMessage;
