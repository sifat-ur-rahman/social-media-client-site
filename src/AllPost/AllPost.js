import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPostCard from './AllPostCard';

const AllPost = () => {
    const allPost = useLoaderData()
    // console.log(allPost);
    return (
        <div className='grid justify-center mt-6 mb-6'>
           {
            allPost.map((data)=> <AllPostCard
            key={data._id}
            data={data}
            
            ></AllPostCard> )
           } 
        </div>
    );
};

export default AllPost;