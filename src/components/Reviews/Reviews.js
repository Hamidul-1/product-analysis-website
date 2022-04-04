import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import useReview from '../hook/useReview';


const Reviews = () => {
    const [review, setReview] = useReview();
    return (
        <div>
            <h2 className='my-5'>Reviews</h2>
            <div className='row row-cols-1 row-cols-md-3 g-5 mt-3 mb-5 container mx-auto'>
                {
                    review.map(review => <CustomerReview
                        key={review.id}
                        review={review}
                    ></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;