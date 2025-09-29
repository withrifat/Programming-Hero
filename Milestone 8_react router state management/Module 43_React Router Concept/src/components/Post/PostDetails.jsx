import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    return (
        <div className='m-5 p-5 border border-blue-400 rounded'>
            <h1 className='text-2xl font-bold'>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;