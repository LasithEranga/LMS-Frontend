import React from "react";
import { Col } from "react-bootstrap";

const CourseCard = ({ image, title, moduleCode, textColor }) => {
  return (
    <Col lg={3} className={`p-2 ${textColor}`}>
      <div>
        <img src={image} width={"100%"} height="200px" alt="" />
      </div>
      <div className="text-start fs-3 fw-semibold">
        <div>{title}</div>
        <div>{moduleCode}</div>
      </div>
    </Col>
  );
};

export default CourseCard;
