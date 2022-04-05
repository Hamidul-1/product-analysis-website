import React from 'react';
import './Blog.css';

const Blogs = () => {
    return (
        <div>
            <h2>Blogs</h2>
            <div className='blog'>
                <div className='blog-1'>
                    <h2>What is context API?</h2>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.<br/><br/>
                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share states across the entire app (or part of it) lightly and with ease.</p>
                </div><br/>
                <div className='blog-2'>
                    <h2>What is a semantic tag?</h2>
                    <p>
                        Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.Elements such as &lt;header&gt; , &lt;footer&gt; and &lt;article&gt; are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.<br/>
                        Semantics is concerned with meaning. In HTML, this is the purpose of elements and attributes, and the logical (sense and reference) relationship between elements and the attributes of those elements.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;