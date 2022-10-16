import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiManager } from "../../app/apiManager";
import GradeRow from "./GradeRow";

function GradeView() {
  const [fetchedData, setFetchedData] = useState([]);
  const userDetails = useSelector((state) => state.login);

  useEffect(() => {
    //todo
    let body = { id: userDetails.userid };

    let dataPromise = apiManager("/user/getUser", body, false, "POST");
    dataPromise.then((data) => {
      console.log(data);
      setFetchedData(data);
    });
  }, []);

  return (
    <div className="ps-4 pt-4 pe-5">
      <div className="  fs-3 fw-semibold pb-3">Grades</div>

      <div className="fw-semibold fs-5">
        <GradeRow
          courseName={"Course Name"}
          marks={"Marks"}
          color="table-head text-light"
        />
      </div>
      <div class="row">
        {fetchedData.courses &&
          fetchedData.courses.map((row, index) => {
            return (
              <GradeRow
                color={index % 2 == 0 ? "light" : "secondary"}
                courseName={row.courseName}
                marks={row.marks}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}

export default GradeView;
