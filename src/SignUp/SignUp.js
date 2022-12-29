import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { AuthContext } from '../../Contexts/AuthProvider';

// import useToken from '../../Hooks/UseToken';
import { AuthContext } from '../Contexts/AuthProvider';

const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const {register, formState:{errors}, handleSubmit } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    
    const navigate = useNavigate()

   
    const handleSignUp = (data) =>{
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            alert("User created SuccessFully.")
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                
                navigate('/')
            })
            .catch(err => console.error(err))
        })
        .catch(err => {
            console.error(err)
            setSignUpError(err.message)
        })
    }

    // const saveUser = (name, email) =>{
    //     const user = {name, email};
    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         // getUserToken(email)
    //         setCreatedUserEmail(email)
    //     })
    // }

   

    return (
        <div className='h-[800px] flex justify-center items-center' >
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>SignUp</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
     
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Name</span>
                </label>
                <input type="text" 
                {...register("name", {required: 'Name Address is required'})}
                 className="input input-bordered w-full max-w-xs"/>
                 {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Email</span>
                </label>
                <input type="text" 
                {...register("email", {required: 'Email Address is required'})}
                 className="input input-bordered w-full max-w-xs"/>
                 {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Password</span>
                </label>
                <input type="password" 
                {...register("password", {required: 'Password Address is required', minLength: {value: 6, message: 'password must be 6 characters'},})}
                 className="input input-bordered w-full max-w-xs "/>
                 {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                
            </div>

            
                <input className='btn btn-accent w-full mt-5' value = 'Sign Up' type="submit" />

                {
                    signUpError && <p className='text-red-500'>{signUpError}</p>
                }
         </form>
         <p>Already have an account <Link className='text-secondary mt-5' to={'/login'}>Please Login</Link></p>
         <div className="divider">OR</div>
         <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;