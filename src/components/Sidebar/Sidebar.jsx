import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import StyledLink from "./StyledLink";
import ToastMessage from "../ToastMessage";
import { store } from "../../app/store";
import { logout } from "../../reducers/loginSlice";

const Sidebar = () => {
  const [show, setShow] = useState(true);
  const [isnavigating, setNavigating] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {}, [isnavigating]);

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
                path="/course-view"
              />
              <StyledLink
                title={"Grades"}
                iconClass="fa-solid fa-chart-simple"
                path="/grades"
              />
              <StyledLink
                title={"Profile"}
                iconClass="fa-solid fa-user"
                path="/profile"
              />
            </div>
          </div>

          <div
            className="ps-4 mb-2 d-flex align-items-center fs-5 "
            onClick={() => {
              store.dispatch(logout());
              navigate("/login");
            }}
          >
            <StyledLink
              title={"Logout"}
              iconClass="fa-solid fa-arrow-right-from-bracket"
            />
          </div>
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

        <div style={{ height: "80vh" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
