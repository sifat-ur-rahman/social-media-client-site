import React from 'react';
import { useForm } from 'react-hook-form';

const AddPost = () => {
    const {register, formState:{errors}, handleSubmit,reset } = useForm();


    const handleAddPost = data =>{
        const image = data.img[0]
        // console.log( data);
        const formData = new FormData()
        formData.append('image', image)
        const url =`https://api.imgbb.com/1/upload?key=a135457f4ca9a16c458962a3ed75df96`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
           if(imgData.success){
            console.log(imgData.data.url);
            const post ={
                address: data.address,
                mind: data.mind,
                img: imgData.data.url,
                

            }
            console.log(post);

            fetch('http://localhost:5000/addPost',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json',
                    
                },
                body: JSON.stringify(post)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
               
                reset()
            })
    }})
}

    return (
        <div>
            <div className=' mx-4  '>
            <h2 className='text-4xl text-center'> Add A Post </h2>
            <form onSubmit={handleSubmit(handleAddPost)}>
     
     <div className='grid grid-cols-3 gap-4 justify-center'>
     <div className="form-control w-full max-w-xs">
         <label className="label">
              <span className="label-text">Address</span>
         </label>
         <input type="text" 
         {...register("address", {required: 'Address is required'})}
          className="input input-bordered input-success w-full max-w-xs"/>
          {errors.address && <p className='text-red-600'>{errors.address?.message}</p>}
     </div>
     <div className="form-control w-full max-w-xs">
         <label className="label">
              <span className="label-text">What's on your mind?</span>
         </label>
         <input type="text" 
         {...register("mind", {required: 'mind is required'})}
          className="input input-bordered input-success w-full max-w-xs"/>
          {errors.mind && <p className='text-red-600'>{errors.mind?.message}</p>}
     </div>
    
     <div className="form-control w-full max-w-xs">
         <label className="label">
              <span className="label-text">Photo</span>
         </label>
         <input type="file" 
         {...register("img", {required: 'photo is required'})}
         className="file-input file-input-bordered file-input-success w-full max-w-xs"/>
          {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
     </div>

     </div>
     
     <div className='grid place-content-end'>
     <input className='btn btn-accent w-40 m-5 ' value = 'Add Post' type="submit" />
     </div>
     
        

         
  </form>
        </div>
        </div>
    );
};

export default AddPost;