// import React from 'react';
import list from "../assets/list.json"

const FreeBook = () => {
    
    const filterData = list.filter((data) => data.category === "Free")

    return (
        <>
            <div>

            </div>
        </>
    );
};

export default FreeBook;