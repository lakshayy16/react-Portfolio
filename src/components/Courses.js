import React, { useState, useEffect } from 'react';
import CourseList from './CourseList';
import useFetch from '../hooks/useFetch';

const Courses = () => {

    const {loading,error,data : courselist} = useFetch("http://localhost:9090/courses/")
      return (

        <div className="home">

          {error && <div><h1>{error}</h1></div>}        
          {loading && <div><h1>Loading......</h1></div>}  
          {courselist && <CourseList courselist = {courselist} /> }
          </div>
      );
}
 
export default Courses;