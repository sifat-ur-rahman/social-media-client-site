import React from 'react';
import { useLoaderData } from 'react-router-dom';

import PostCard from './PostCard';

const ViewPost = () => {
    const postsData = useLoaderData()
    // console.log(postsData);
    return (
        <div className='grid justify-center mt-6 mb-6'>
            {
                postsData.map((postData)=> <PostCard
                key={postData._id}
                postData={postData}
                ></PostCard>)
            }
           
        </div>
    );
};

export default ViewPost;