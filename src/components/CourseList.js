import { Link } from "react-router-dom";

const CourseList = ({courselist})=>{
    return( 
    <div className="courselist">
        {courselist.map(course => (
            <div className="course-preview" key={course.id} >
                <Link to={`/Courses/${course.id}`}> 
                    <h2>{ course.title }</h2>
                    <p>Taught by { course.prof }</p>
                </Link>
            </div>))}
    </div>)
};

export default CourseList;