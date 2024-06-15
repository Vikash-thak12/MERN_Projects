// import React from 'react';

const Cards = ( {item}) => {
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                    </h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;