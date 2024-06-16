// import React from 'react';
import "./Cards.css"

const Cards = ( {item}) => {
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="rounded-lg image"><img src={item.image} /></div>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                    </h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline p-4">${item.price}</div>
                        <div className="badge badge-outline p-4 hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;