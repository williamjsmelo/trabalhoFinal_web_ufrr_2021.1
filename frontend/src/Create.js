import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { withRouter } from "react-router";

import React from "react";

import { FiPlus } from "react-icons/fi";

import Api from './Api';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);

    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    
    const history = useHistory();

    function handleSelectImages(event) {
        if (!event.target.files) {
          return;
        }
    
        const selectedImages = Array.from(event.target.files)
    
        setImages(selectedImages);
    
        const selectedImagesPreview = selectedImages.map(image => {
          return URL.createObjectURL(image);
        });
    
        setPreviewImages(selectedImagesPreview);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const blog =  new FormData();

        setIsPending(true);

        blog.append('title', title);
        blog.append('body', body);
        blog.append('author', author);

        images.forEach(image => {
            blog.append('images', image);
        });

        await Api.post('orphanages', blog).then(() => {
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

                <div className="input-block">
                    <label htmlFor="images">Fotos</label>

                    <div className="images-container">
                        {previewImages.map(image => (
                            <img key={image} src={image} />
                        ))}
                    </div>
                    <input required multiple onChange={handleSelectImages} type="file" id="image[]"/>
                </div>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Add Bloging...</button>}
            </form>
        </div>
    );
};

export default withRouter(Create);