import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const details = useLoaderData()
  console.log(details);
    return (
        <div className='m-28'>
            <div className="card  lg:card-side bg-base-100 shadow-xl">
  <figure className='w-1/2'><img  src={details.img} alt="Album"/></figure>
  <div className="card-body ">
    <h2 className="card-title">Location: {details.address}</h2>
    <p>{details.mind}</p>
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Comment</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;