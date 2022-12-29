import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import CommentCard from './CommentCard';


const Comment = () => {
    const commentPost = useLoaderData()
    // const [commentPost, setCommentPost] = useState({}) 
    // const {loading} = useContext(AuthContext)
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/comment/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setCommentPost(data)

    //     })
    //   },[id])
    // console.log(commentPost);

    // if(loading){
    //     return <progress className="progress mt-56 mb-56 w-full"></progress>
    // }

    return (
        <div className='grid grid-cols-2 gap-4 mt-6 mb-6 justify-items-center'>
            {
                commentPost?.map((cData) => <CommentCard
                key={cData._id}
                cData={cData}
                ></CommentCard>)
            }
        </div>
    );
};

export default Comment;