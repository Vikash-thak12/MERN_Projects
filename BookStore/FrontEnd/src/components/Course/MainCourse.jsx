// import React from 'react';
// import list from '../../assets/list.json'
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';

const MainCourse = () => {

    const [book, setBook] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:8001/book")
                setBook(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    }, [])
    return (
        <div className='min-h-screen overflow-hidden max-w-screen-xl container mx-auto md:px-10 px-4'>
            <div className='mt-20'>
                <h1 className='text-4xl font-bold text-center'>Main course</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est sit cum magnam saepe minus atque eligendi aspernatur obcaecati! Inventore quae perferendis sit ullam quo et voluptate accusantium, deleniti minus!</p>
                <Link to={'/'}>
                    <div className='text-center mt-2'><button className='border px-4 py-2 rounded-2xl font-bold text-center'>Back</button></div>
                </Link>
            </div>
            <div className='card grid md:grid-cols-3 grid-cols-1'>
                {
                    book.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default MainCourse;