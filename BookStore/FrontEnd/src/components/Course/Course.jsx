// import React from 'react';

import Footer from "../Footer";
import Navbar from "../Navbar";
import MainCourse from "./MainCourse";

const Course = ({ searchResults}) => {
  return (
    <>
    <Navbar />
    <MainCourse searchResults={searchResults} />
    <Footer />
    </>
  );
};

export default Course;