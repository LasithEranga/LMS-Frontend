import React from "react";

function InputGroup({ id, type, label }) {
  return (
    <div className="mt-2">
      <label for={id} className="mb-1 text-form-text">
        {label}
      </label>
      <input type={type} className="w-100 form-control" id={id} />
    </div>
  );
}

export default InputGroup;
