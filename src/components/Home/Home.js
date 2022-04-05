import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apple from '../../image/apple.jpg'
import CustomerReview from '../CustomerReview/CustomerReview';
import useReview from '../hook/useReview';
// import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const [review, setReview] = useReview();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();



    const showAll = () => {
        navigate(`/reviews`)
    }
    return (
        <div className='container'>
            <div className='d-lg-flex p-5'>
                <div className="heading">
                    <h1>Apple Watch</h1>
                    <p>Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services.</p>
                    <button className='btn btn-success px-3'>More Details</button>
                </div>
                <div className="image">
                    <img src={apple} alt="" />
                </div>
            </div>

            <div>
                <h3 className='p-5'>Customer Reviews(3)</h3>
                <hr className='w-75 mx-auto' />
                <div className='row row-cols-1 row-cols-md-3 g-3 mt-3 mb-5 container mx-auto'>
                    {
                        review.slice(0, 3).map(review => <CustomerReview
                            key={review.id}
                            review={review}
                        ></CustomerReview>)
                    }
                </div>
                <button className='btn btn-success px-3' onClick={showAll}>More Details</button>
            </div>
        </div>
    );
};

export default Home;