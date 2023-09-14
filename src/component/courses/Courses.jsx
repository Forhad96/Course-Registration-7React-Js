import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useState } from 'react';
const Courses = () => {
    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};
Courses.propTypes={

}
export default Courses;