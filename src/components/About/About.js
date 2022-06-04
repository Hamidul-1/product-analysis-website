import React from 'react';
import apple from '../../image/apple.jpg'

const About = () => {
    return (
        <div>
            <div className='d-lg-flex p-5'>
                <div className="heading">
                    <h1>About Apple Watch</h1>
                    <p>Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services.</p>
                    <button className='btn btn-success px-3'>More Details</button>
                </div>
                <div className="image">
                    <img src={apple} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;