import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisV, FaRegThumbsUp } from "react-icons/fa";

const AllPostCard = ({data}) => {
  
  const {address, mind, img, _id, writer, writerImg} = data
  // console.log(address);
  const [count, setCount] = useState(3)
  
  const increaseCount = () =>{
    const newCount = count + 1
    setCount(newCount)
  }
    return (
        <div data-theme="business" className='mb-6'>
            <div>

             <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <section className='flex px-3 justify-between items-center'>
              <div className='flex pt-3 pb-2 items-center'>
              <div className="avatar online">
  <div className="w-10  rounded-full ">
    <img src={writerImg} alt='' />
  </div>
  
</div>
<p className='ml-3'>{writer}</p>
              </div>
              
              <div className="dropdown">
  <label tabIndex={0} className=" m-1"><FaEllipsisV/></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28">
    <li><a >Copy link</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
              </section>
              
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
        </div>
    );
};

export default AllPostCard;