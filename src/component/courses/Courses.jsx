import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";


const Courses = ({handlerSelect}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-1/2 lg:w-3/4">
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
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
