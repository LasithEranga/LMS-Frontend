import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiManager } from "../../app/apiManager";
import CardView from "../../components/CourseCardView/CardView";
import ProfileView from "../../components/ProfileView/ProfileView";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const userDetails = useSelector((state) => state.login);

  useEffect(() => {
    //todo
    let body = { id: userDetails.userid };

    let dataPromise = apiManager("/user/getUser", body, false, "POST");
    dataPromise.then((data) => {
      // console.log(data);
      setUserData(data);
      setEnrolledCourses(data.courses);
    });
  }, []);

  return (
    <div className="ps-4">
      <div className=" pt-3 fs-3 fw-semibold">Profile</div>
      <ProfileView
        name={userData.email}
        email={userData.email}
        username={userData.username}
      />

      <div className=" pt-3 fs-3 fw-semibold">Enrolled Courses</div>
      <div
        className="d-flex gap-2  pb-3"
        style={{ width: "100%", overflowX: "auto" }}
      >
        {enrolledCourses.map((course, index) => {
          return (
            <CardView
              noOfCols={2}
              moduleCode={course.courseCode}
              moduleName={course.courseName}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
