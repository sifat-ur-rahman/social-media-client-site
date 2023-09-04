import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../Contexts/AuthProvider';

const AddPost = () => {
    const {user} = useContext(AuthContext)
    const {register, formState:{errors}, handleSubmit,reset } = useForm();
    console.log(user)

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
               writer:user.displayName,
               writerImg:user?.photoURL,
               writerEmail:user?.email,
                mind: data.mind,
                img: imgData.data.url,
                time: new Date(),

            }
            console.log(post);

            fetch('https://social-media-server-gray.vercel.app/addPost',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json',
                    
                },
                body: JSON.stringify(post)
            })
            .then(res => res.json())
            .then(result => {
                toast.success("Post Successful")
                console.log(result);
               
                reset()
            })
    }})
}

    return (
        <div className='grid justify-items-center mt-4'>
            <div className='w-[442px] py-6 px-3 rounded-3xl bg-slate-800'>
           
            <form onSubmit={handleSubmit(handleAddPost)}>
     
     <div className='grid grid-cols-1 gap-2   justify-center'>

     <div className="form-control w-full max-w-md">
         
         <input type="text" 
         placeholder="What's on your mind?"
         {...register("mind", {required: 'mind is required'})}
          className="input input-bordered input-success w-full "/>
          {errors.mind && <p className='text-red-600'>{errors.mind?.message}</p>}
     </div>
    <div className='flex items-center justify-items-center'>
     <div className="form-control w-full max-w-xs">
         
         <input type="file" 
         {...register("img", {required: 'photo is required'})}
         className="file-input file-input-bordered file-input-success w-full max-w-md"/>
          {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
     </div>
     <input className='btn btn-outline btn-success px-6 ml-4 ' value = 'Post' type="submit" />
     </div>

     </div>
        

         
  </form>
        </div>
        </div>
    );
};

export default AddPost;