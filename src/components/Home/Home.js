import React from 'react';
import apple from '../../image/apple.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='row row-cols-1 row-cols-lg-2 d-flex justify-center'>
                <div className="heading">
                    <h1>Titan</h1>
                    <p>kjhjhf</p>
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