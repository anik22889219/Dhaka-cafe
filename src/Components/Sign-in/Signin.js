import { Button, Card, Input, Typography } from '@material-tailwind/react';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase.init.';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const auth = getAuth(app)

const Signin = () => {

    const [email ,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [errormsg,setErrormsg] = useState('')
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword ,user,error ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    
    // if(error){
    //   setErrormsg('pleas check you email or password')
    // }
  
    if(user){
      navigate(from,{replace: true})
      
    }
   
    
    const hendelGoogleSingIn = ()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from,{replace: true})

        })
    }
    
    return (
        <div className='md:mx-auto md:w-1/2  rounded-3xl my-9 bg-red-400'>
            <Card className='items-center bg-green-600 py-3'>
            <Typography variant="h4" color="white">
        Sign in
      </Typography>
            <Typography variant="h6" color="white">
        pleas login first
      </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col  gap-6">
          
          <Typography variant="h6" color="white" className="mb-3">
            Your Email
          </Typography> 
          <Input
          onChange={(e) => setEmail(e.target.value)}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="white" className="-mb-3">
            Password
          </Typography>
          <Input
          onChange={(e) => setPassword(e.target.value)}
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200   focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
         
          
        </div>
       
        <Button onClick={() => signInWithEmailAndPassword(email, password)} className="mt-6" fullWidth>
          sign in
        </Button>
        
        <Typography className='text-center text-white my-2'>Or</Typography>
        <Button onClick={hendelGoogleSingIn} className="mt-6 flex-wrap flex items-center gap-2 w-full justify-center"><FaGoogle className='size-5'></FaGoogle>-Sing in</Button>
        <Typography color="white" className="mt-4 text-center font-normal">
          Create an new account?{" "}
          <Link to="/login"><span className='text-black font-bold hover:text-yellow-600'>Sing up</span></Link>
        </Typography>
      </form>
            </Card>
        </div>
    );
};

export default Signin;