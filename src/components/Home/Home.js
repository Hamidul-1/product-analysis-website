import React from 'react';
import apple from '../../image/apple.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='row row-cols-1 row-cols-lg-2 d-flex justify-center'>
                <div className="heading">
                    <h1>Apple Watch</h1>
                    <p>Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services.</p>
                    <button>More Details</button>
                </div>
                <div className="image">
                    <img src={apple} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;