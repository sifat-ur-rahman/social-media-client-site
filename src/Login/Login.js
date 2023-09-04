import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import loginImg from '../img/login.svg'
import { toast } from 'react-hot-toast';
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
            // console.log(user);
            toast.success('Google login successfully')
            navigate(from, {replace: true})
        })
        .catch(error =>
            {toast.error('Something is wrong')
            console.error(error)})
    }
    const handleLogin = data =>{
        console.log(data);
        SetLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            toast.success('Login successfully')
            setLoginUserEmail(data.email)
            navigate(from, {replace: true})

        })
        .catch(err => {
            toast.error('Something is wrong')
            SetLoginError(err.message)
        })
    }



    return (
        <div className='' >
             <h2 className='text-4xl font-bold text-center mt-4'>Login</h2>
            <section className='m-12 flex justify-center items-center content-center'>
            <div>
                <img src={loginImg} alt="" />
            </div>
            <div className='self-center px-7'>
               
            <form onSubmit={handleSubmit(handleLogin)}>
     
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Email</span>
                </label>
                <input type="email" 
                placeholder='Your register email'
                {...register("email", {required: 'Email Address is required'})}
                 className="input input-bordered input-success w-full max-w-xs"/>
                 {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                     <span className="label-text">Password</span>
                </label>
                <input type="password" 
                placeholder='Your account password'
                {...register("password", {required: 'Password  is required', minLength: {value: 6, message: 'password must be 6 characters'},})}
                 className="input input-bordered input-success w-full max-w-xs"/>
                 {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                
            </div>

            
                <input className='btn btn-accent w-full mt-5' value = 'Login' type="submit" />

                {loginError && <p className='text-red-500'>{loginError}</p>}
         </form>
         <p className='mt-3'>New to Friend Ster ? <Link className='text-secondary ' to={'/signup'}>Create new account</Link></p>
         <div className="divider">OR</div>
         <button onClick={handleGoogleSignIn}
          className='btn btn-outline btn-warning w-full'>CONTINUE WITH GOOGLE</button>
            </div>
            </section>
        </div>
    );
};

export default Login;