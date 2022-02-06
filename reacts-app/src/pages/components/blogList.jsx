import React from 'react';
import { Link } from 'react-router-dom';
function BlogList({ind, title, content}) {
    return ( 
        <>
            {/* Post preview*/}
            <div className="post-preview" data-index={ind}>
                <Link to="/blog">
                    <h2 className="post-title">{title}</h2>
                    <h3 className="post-subtitle">{content}</h3>
                </Link>
                <p className="post-meta">
                    Posted by
                    Namul Hossain
                    on September 24, 2021
                </p>
            </div>
            {/* <hr className="my-4" /> */}
        </>
     );
}

export default BlogList;