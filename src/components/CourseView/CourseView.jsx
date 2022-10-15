import CardView from "./CardView";
import "./CourseView.css";

const CourseView = () => {
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

      <div className="d-flex row gap-2 p-1" style={{ height: "20rem" }}>
        <CardView />
        <CardView />
        <CardView />
      </div>
    </div>
  );
};

export default CourseView;
