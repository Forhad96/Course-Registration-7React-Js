import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";
import './Courses.css'


const Courses = ({handlerSelect}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="">
      <div className="card-container">
        {courses.map((course) => (
          <Course
          handlerSelect={handlerSelect}
          key={course.id} 
          course={course}></Course>
        ))}
      </div>
    </div>
  );
};
Courses.propTypes = {
  handlerSelect:PropTypes.func.isRequired,
};
export default Courses;
