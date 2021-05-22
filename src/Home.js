import BlogList from './BlogList';
import useFetch from './useFetch';

import React from "react";

import app from "./base";

const Home = () => {

    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            <button onClick={() => app.auth().signOut()}>Sign out</button>
            { error && <div>{error}</div> }
            { isLoading && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}
        </div>
    );
}
 
export default Home;