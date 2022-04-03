import React from 'react';

const CustomerReview = (props) => {
    const { name, picture, review, rating } = props.review
    return (
        <div className='col'>
            <img src={picture} className="card-img-top" alt="" />
            <div>
                <h1>name: {name}</h1>
                <p>Review: {review}</p>
                <p><small>{rating}</small></p>
            </div>

        </div>
    );
};

export default CustomerReview;