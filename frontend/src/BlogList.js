import { Link } from "react-router-dom";

import React from "react";

const BlogList = ({blogs, title}) => {

    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>By: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;