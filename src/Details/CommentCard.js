import React from 'react';

const CommentCard = ({cData}) => {
    return (
        <div>
            <div className="card w-96 slate-50 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Name: {cData.name}</h2>
    <p>Comment: {cData.comment}</p>
    
  </div>
</div>
        </div>
    );
};

export default CommentCard;