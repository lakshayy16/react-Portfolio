import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";



const OnceCourse = () => {
    const {id} = useParams();
    const {loading,error,data : course} = useFetch("http://localhost:9090/courses/"+id)

    return ( 
        <div className="course-details">
        {error && <div><h1>{error}</h1></div>}        
        {loading && <div><h1>Loading......</h1></div>}  
        {course && 
        <article>
            <h2>{course.title}</h2>
            <p>Taught By:- {course.prof}</p>
            <div>{course.body}</div>
        </article>
        
        }
            
        </div>
     );
}
 
export default OnceCourse;