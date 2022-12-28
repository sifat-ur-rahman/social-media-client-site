import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';

const ViewPost = () => {
    return (
        <div className='grid justify-center mt-6 mb-6'>
           <PostCard></PostCard>
        </div>
    );
};

export default ViewPost;