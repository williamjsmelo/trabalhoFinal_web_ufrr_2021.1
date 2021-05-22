import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { withRouter } from "react-router";

import React from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog) 
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        });
    }

    return (
        <div className='create'>
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type='text'
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value='Mario'>Mario</option>
                    <option value='Luigi'>Luigi</option>
                    <option value='Yoshi'>Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Add Bloging...</button>}
            </form>
        </div>
    );
};

export default withRouter(Create);