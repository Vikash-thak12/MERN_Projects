// import React from 'react';
import Navbar from './Navbar';
import MainCourse from './Course/MainCourse';

const Upper = () => {

    const [searchResults, setSearchResults] = useState([]);
  return (
    <>
    <Navbar setSearchResults={setSearchResults} />
    <MainCourse searchResults={searchResults} />
    </>
  );
};

export default Upper;   