import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';
import { withRouter } from "react-router";
import { useState } from "react";

import React from "react";

const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog, isLoading, error} = useFetch('http://localhost:3333/orphanages/'+id);
    const history = useHistory();

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleDelete = () => {
        fetch('http://localhost:3333/orphanages/'+id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        });
    }

    return(
        <div className='blog-details'>
            { isLoading && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>By: { blog.author }</p>
                    <div>{ blog.body }</div>

                    <div className="images">
                        {blog.images.map((image, index) => (
                            <img src={image.url} />
                        ))}
                    </div>

                    <button onClick={handleDelete}>Delete</button>
                </article>
            ) }
            
        </div>
    );
}

export default withRouter(BlogDetails);