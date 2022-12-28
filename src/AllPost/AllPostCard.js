import React from 'react';
import { Link } from 'react-router-dom';

const AllPostCard = () => {
    return (
        <div>
            <div>
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <Link to="/details" className="btn btn-accent w-40 m-5">Details</Link>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default AllPostCard;