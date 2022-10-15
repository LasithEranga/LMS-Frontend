import React from 'react'
import "./CourseEvaluation.css"


function CourseEvaluation() {
  return (
    <div>
     <div className="CourseEvo">
    
    <table><tr>
      <td>Course Title</td>
      <td>Assignment <input
      type="text"
      name="Assignment"
      required="required"
      placeholder="Enter the Assignment Title.">
      </input></td>
    </tr>
  </table>
  
      <table>
        <thead>
<tr>
<th>Student ID</th>
<th>Student Name</th>
<th>Submit Date</th>
<th>Grade</th>
</tr>
        </thead>
        <tbody>
          <tr>
            <td>IM/2018/001</td>
            <td>AAAAAA</td>
            <td>2022.08.12</td>
            <td><input
            type="text"
            name="Assignment"
            required="required"
            placeholder="Enter the Grade"></input>
            <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
          
        
      
  </div>   
    </div>
  )
}

export default CourseEvaluation