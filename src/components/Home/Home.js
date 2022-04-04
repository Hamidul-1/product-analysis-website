import React from 'react';
import apple from '../../image/apple.jpg'
import CustomerReview from '../CustomerReview/CustomerReview';
import useReview from '../hook/useReview';
// import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [review, setReview] = useReview();
    return (
        <div className='container-fluid'>
            <div className='row row-cols-1 row-cols-md-2 d-flex align-items-center justify-content-center '>
                <div className="heading">
                    <h1>Apple Watch</h1>
                    <p>Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services.</p>
                    <button>More Details</button>
                </div>
                <div className="image">
                    <img className='img-fluid' src={apple} alt="" />
                </div>
            </div>
            <div>
                <h3>Customer Review</h3>
                <hr className='w-75 mx-auto' />
                <div className='row row-cols-1 row-cols-md-3 g-3 mt-3 mb-5 container mx-auto'>
                    {
                        review.slice(0, 3).map(review => <CustomerReview
                            key={review.id}
                            review={review}
                        ></CustomerReview>)
                    }

                </div>
                <div>
                    <button>See more</button>
                </div>
            </div>
        </div>
    );
};

export default Home;