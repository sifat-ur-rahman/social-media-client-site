import React from 'react';
import { useLoaderData } from 'react-router-dom';

import PostCard from './PostCard';

const ViewPost = () => {
    const postData = useLoaderData()
    console.log(postData);
    return (
        <div className='grid justify-center mt-6 mb-6'>
            {
                postData.map((pData)=> <PostCard
                key={pData._id}
                pData={pData}
                ></PostCard>)
            }
           
        </div>
    );
};

export default ViewPost;