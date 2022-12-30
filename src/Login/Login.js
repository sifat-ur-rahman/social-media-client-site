import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
// import { AuthContext } from '../../Contexts/AuthProvider';


const Login = () => {
    const {register, formState:{errors}, handleSubmit } = useForm()
    const {signIn, providerLogin,} = useContext(AuthContext)
    const [loginError, SetLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
    
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'
    const googleProvider = new GoogleAuthProvider()

    

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }
    const handleLogin = data =>{
        console.log(data);
        SetLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email)
            navigate(from, {replace: true})
        })
        .catch(err => {
            console.error(err.message)
            SetLoginError(err.message)
        })
    }



    return (
        <div className='h-[800px] flex justify-center items-center' >
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
     
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
                 className="input input-bordered w-full max-w-xs"/>
                 {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <label className="label">
                     <span className="label-text">Forget Password?</span>
                </label>
            </div>

            
                <input className='btn btn-accent w-full' value = 'Login' type="submit" />

                {loginError && <p className='text-red-500'>{loginError}</p>}
         </form>
         <p>New to Friend Ster? <Link className='text-secondary mt-5' to={'/signup'}>Create new account</Link></p>
         <div className="divider">OR</div>
         <button onClick={handleGoogleSignIn}
          className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;