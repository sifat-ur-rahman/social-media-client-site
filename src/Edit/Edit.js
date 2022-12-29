import React from 'react';
import { useForm } from 'react-hook-form';

const Edit = ({dataAbout}) => {
  // console.log(dataAbout);
  const {register, handleSubmit } = useForm();

  const handleAddEdit = data =>{
    console.log(data);
  }

    return (
        <form onSubmit={handleSubmit(handleAddEdit)}>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal grid justify-center">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input {...register("name", {required: 'name is required'})}
  type="text" defaultValue={dataAbout.name} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input {...register("email", {required: 'email is required'})}
   type="text" defaultValue={dataAbout.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">University</span>
  </label>
  <input {...register("university", {required: 'university name is required'})}
   type="text" defaultValue={dataAbout.university} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Address</span>
  </label>
  <input {...register("address", {required: 'address is required'})}
   type="text" defaultValue={dataAbout.address} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</div>
<input className='btn btn-accent w-40 m-5 ' value = 'Save' type="submit" />
  </div>
</div>
        </form>
    );
};

export default Edit;