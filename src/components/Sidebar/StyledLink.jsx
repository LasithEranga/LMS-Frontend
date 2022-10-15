import React from "react";
import { Link } from "react-router-dom";

const StyledLink = ({ path, title, iconClass }) => {
  return (
    <div>
      <Link
        to={path}
        className=" d-flex  align-items-center pe-5 text-decoration-none text-light"
      >
        <i
          className={`${iconClass} nav-link-icon mt-1 me-3 text-animation`}
        ></i>
        <div>{title}</div>
      </Link>
    </div>
  );
};

export default StyledLink;
