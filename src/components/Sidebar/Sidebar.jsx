import React, { useState } from "react";
import "./Sidebar.css";
import { Link, Outlet } from "react-router-dom";
import StyledLink from "./StyledLink";

const Sidebar = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="d-flex " style={{ overflowX: "hidden" }}>
      <div className={`sidebar ${show ? "" : "sidebar-colapsed"}`}>
        <nav className="nav">
          <div>
            <div
              onClick={() => {
                setShow((prev) => !prev);
              }}
              className={`text-light fw-bold ${
                show ? "ps-2" : "ps-3"
              } pb-3 fs-5 `}
            >
              <i
                className={`text-light fs-5  me-2 ${
                  show ? "" : " fas fa-bars ps-1"
                }`}
              ></i>
              {show ? "FLO KELANIYA" : ""}
            </div>

            <div
              className={`pt-2 d-flex row gap-4 ${
                show ? "fs-5" : "fs-4"
              }  ps-3`}
            >
              <StyledLink
                title={"Dashboard"}
                iconClass="fas fa-tachometer-alt"
                path="/dashboard"
              />
              <StyledLink
                title={"Modules"}
                iconClass="fa-solid fa-book"
                path="/dashboard"
              />
              <StyledLink
                title={"Grades"}
                iconClass="fa-solid fa-chart-simple"
                path="/dashboard"
              />
              <StyledLink
                title={"Profile"}
                iconClass="fa-solid fa-user"
                path="/course-evaluation"
              />
            </div>
          </div>

          <Link to="/logout" className="text-center">
            <i className="fas fa-sign-out nav-link-icon"></i>
          </Link>
        </nav>
      </div>
      <div className="col">
        <div
          className="bg-dark py-3 position-sticky top-0"
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          .
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
