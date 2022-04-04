import React from 'react';
import './Blog.css';

const Blogs = () => {
    return (
        <div>
            <h2>Blogs</h2>
            <div className='blog'>
                <div>
                    <h2>What is context API?</h2>
                    <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
                </div>
                <div>
                    <h2>What is a semantic tag?</h2>
                    <p>
                    Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;