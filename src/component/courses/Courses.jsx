import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-3/4">
      <h1 className="text-4xl">Courses:{courses.length}</h1>
      <div className="grid grid-cols-3 gap-6">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};
Courses.propTypes = {};
export default Courses;
