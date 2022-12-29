import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';


const Details = () => {
  const details = useLoaderData()
  const {user,loading} = useContext(AuthContext)
 
  const id = details._id
  // console.log(details);
// console.log(user);
const navigate = useNavigate()
  const {register, handleSubmit,reset } = useForm();

  const handleAddComment = data =>{
    
    const comment ={
      comment : data.comment,
      id : details._id,
      name: user.displayName
    }

    fetch('https://social-media-server-gray.vercel.app/addComment',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json',
                    
                },
                body: JSON.stringify(comment)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                
                reset()
                navigate(`/comment/${id}`)
            })
    console.log(comment);
  }
  if(loading){
    return <progress className="progress mt-56 mb-56 w-full"></progress>
}
    return (
        <div className='m-28'>
            <div className="card  lg:card-side bg-base-100 shadow-xl">
  <figure className='w-1/2'><img  src={details.img} alt="Album"/></figure>
  <div className="card-body ">
    <h2 className="card-title">Location: {details.address}</h2>
    <p>{details.mind}</p>
    <form onSubmit={handleSubmit(handleAddComment)}>
    <input {...register("comment", {required: 'Comment is required'})}
     type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
    <div className="card-actions justify-end">
    <input className='btn btn-accent w-40 m-5 '  value = 'Comment' type="submit" />
    </div>
    </form>
    <Link className="btn btn-sm" to={`/comment/${id}`}>See Comment</Link>
    
  </div>
</div>

        </div>
        
    );
};

export default Details;