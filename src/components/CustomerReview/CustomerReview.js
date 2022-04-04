import React from 'react';

const CustomerReview = (props) => {
    const { name, picture, review, rating } = props.review;
    return (
        
        <div className="col">
            <div className="card card-shadow h-100">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: <span className='text-success'>{name}</span></h5>
                    <p className="card-text">{review}</p>
                    <small>Ratings: {rating}</small>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;