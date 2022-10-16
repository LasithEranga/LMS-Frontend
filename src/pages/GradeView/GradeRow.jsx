import React from "react";

function GradeRow({ courseName, marks, color }) {
  return (
    <div>
      <div class={`d-flex p-3 ms-2 bg-${color}`}>
        <div class="col-8">{courseName}</div>
        <div className="text-center col">
          {marks === 0 ? "Not Graded" : marks}
        </div>
      </div>
    </div>
  );
}

export default GradeRow;
