import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import signupImg from '../img/login.svg'
import { AuthContext } from '../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const {createUser, updateUser, providerLogin} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const {register, formState:{errors}, handleSubmit } = useForm();
    

    const googleProvider = new GoogleAuthProvider()

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            // console.log(user);
            toast.success('Google login successfully')
            navigate(from, { replace: true });
        })
        .catch(error => {
            toast.error('Something is wrong')
            console.error(error)})
    }
    

   
    const handleSignUp = (data) =>{
        // console.log(data);
        setSignUpError('');
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
            if (imgData.success) {
                createUser(data.email, data.password)
                .then((result) => {
                    const user = result.user;
                    const userInfo = {
                        displayName: data.name,
                        photoURL: imgData.data.url
                        
                    }
                    updateUser(userInfo)
                    .then(()=>{
                        toast.success('Sign Up successfully')
                        navigate(from, { replace: true });
                    })
                    .catch(err => {
                        toast.error('Something is wrong')
                        console.error(err)})
                }
                )
                .catch(err => {
                    toast.error('Something is wrong')
                    setSignUpError(err.message)
                })
            }
            
            
        })
   
    }

    
   

    return (
        <div className='' >
             <h2 className='text-4xl mt-3 font-bold text-center'>Sign Up</h2>
            <section className='m-12 flex justify-center items-center content-center'>
                    <div>
                        <img src={signupImg} alt="" />
                    </div>
                <div className='px-7'>
            <form onSubmit={handleSubmit(handleSignUp)}>
     
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Name</span>
                </label>
                <input type="text" 
                placeholder='Your full name'
                {...register("name", {required: 'Name is required'})}
                 className="input input-bordered input-success w-full max-w-xs"/>
                 {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
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
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Email</span>
                </label>
                <input type="text" 
                placeholder='Your email'
                {...register("email", {required: 'Email Address is required'})}
                 className="input input-bordered input-success w-full max-w-xs"/>
                 {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Password</span>
                </label>
                <input type="password" 
                placeholder='Your Password'
                {...register("password", {required: 'Password  is required', minLength: {value: 6, message: 'password must be 6 characters'},})}
                 className="input input-bordered input-success w-full max-w-xs "/>
                 {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                
            </div>

            
                <input className='btn btn-outline btn-success font-bold w-full mt-5' value = 'Sign Up' type="submit" />

                {
                    signUpError && <p className='text-red-500'>{signUpError}</p>
                }
         </form>
         <p className='mt-3'>Already have an account <Link className='text-secondary mt-5' to={'/login'}>Please Login</Link></p>
         <div className="divider">OR</div>
         <button onClick={handleGoogleSignIn} className='btn btn-outline btn-warning w-full'>CONTINUE WITH GOOGLE</button>
         </div>
         </section>
            </div>
        
    );
};

export default SignUp;