import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import useReview from '../hook/useReview';

const Reviews = () => {
    const [review, setReview] = useReview();
    return (
        <div className='review-container'>
            <h2 className='my-5'>Reviews</h2>
            <div className='container'>
                <div className='row row-col-1 row-cols-md-3 row-cols-lg-3'>
                    {
                        review.map(review => <CustomerReview
                            key={review.id}
                            review={review}
                        ></CustomerReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;