import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegThumbsUp } from "react-icons/fa";

const PostCard = ({pData}) => {
  const {img, address, mind, _id} = pData
  const [count, setCount] = useState(3)
  
  const increaseCount = () =>{
    const newCount = count + 1
    setCount(newCount)
  }
    return (
        <div data-theme="business" className='mb-6 rounded-2xl'>
             <div className="card  card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Location: {address}</h2>
    <p className='text-lg'>{mind}</p>
    <p className='text-2xl'>like: {count}</p>
    <div className="card-actions justify-between items-center">
    
    <button className='text-3xl btn btn-ghost' onClick={increaseCount} ><FaRegThumbsUp/></button>
      <Link to={`/details/${_id}`} className="btn btn-accent w-40 m-5">Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default PostCard;