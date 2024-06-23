// import React from 'react';
import Navbar from './Navbar';
import MainCourse from './Course/MainCourse';
import { useState } from 'react';
import Course from './Course/Course';

const Upper = () => {

    const [searchResults, setSearchResults] = useState([]);
  return (
    <>
    <Navbar setSearchResults={setSearchResults} />
    <Course searchResults={searchResults} />
    </>
  );
};

export default Upper;   