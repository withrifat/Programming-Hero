import React from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${post.id}`);
    }

    return (
        <div>
            <h1>{post.id}</h1>
            <h3>{post.title}</h3>
            <Link to={`/posts/${post.id}`}>
                <button className='btn button'>Show Details</button>
            </Link>
            <button onClick={handleNavigate} className='btn button'>With Navigate</button>
        </div>
    );
};


export default Post;