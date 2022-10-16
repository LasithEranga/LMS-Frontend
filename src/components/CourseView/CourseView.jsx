import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiManager } from "../../app/apiManager";
import ToastMessage from "../ToastMessage";
import CardView from "./CardView";
import "./CourseView.css";

const CourseView = () => {
  const [refresh, setRefresh] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const userDetails = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    //todo
    let dataPromise = apiManager("/course/getAll", {}, false, "POST");
    dataPromise.then((data) => {
      // console.log(data);
      setFetchedData(data);
    });
  }, [refresh]);

  const onClickHandler = (courseId) => {
    // console.log(courseId, userDetails.userid);

    let dataPromise = apiManager(
      "/enrollment/addEnrollment",
      {
        userId: userDetails.userid,
        courseId: courseId,
        token: userDetails.token,
      },
      true,
      "POST"
    );
    dataPromise.then((data) => {
      // console.log(data);
      setRefresh((pre) => !pre);
    });
  };

  const onViewHandler = (courseId) => {
    navigate(courseId);
  };

  const [userData, setUserData] = useState({});
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [notEnrolled, setNotEnrolled] = useState([]);

  useEffect(() => {
    //todo
    let body = { id: userDetails.userid };

    let dataPromise = apiManager("/user/getUser", body, false, "POST");
    dataPromise.then((data) => {
      // console.log(data);
      setUserData(data);
      setEnrolledCourses(data.courses);
    });
  }, [refresh]);

  const unEnrolledCourses = (courseId) => {
    return enrolledCourses.filter((course) => {
      if (course.id !== courseId) {
        return course;
      }
    });
  };

  return (
    <div className="ps-5 ms-3">
      <div className=" pt-3 fs-3 fw-semibold">All Courses</div>

      <div className="d-flex my-2 col-11 p-3 shadow-sm border border-1">
        <div className="col-8 pe-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search course name"
          />
        </div>
        <div className="col-4">
          <select name="" id="" className="form-control">
            <option value="">Management and IT</option>
            <option value="">SE</option>
          </select>
        </div>
      </div>

      <div className="d-flex row gap-2 p-2">
        {fetchedData.map((course, index) => {
          let isEnrolled = false;
          enrolledCourses.forEach((cour) => {
            // console.log(cour);
            if (course.id == cour.id) {
              console.log(course.id, cour.id);
              isEnrolled = true;
            }
          });
          // console.log("Enrolled:", isEnrolled);
          return (
            <CardView
              courseName={course.courseName ? course.courseName : "dfg"}
              lecturer={course.lecturer ? course.lecturer.username : ""}
              semester={course.semester ? course.semester : ""}
              year={course.year ? course.year : ""}
              key={index}
              onViewHandler={() => onViewHandler(course.id)}
              isEnrolled={isEnrolled}
              onclick={() => {
                onClickHandler(course.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CourseView;
