import React, { useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import {Card,Input,Button,Typography,} from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init.';
import Signin from '../Sign-in/Signin';

const auth = getAuth(app);

const Login = () => {
  const [email ,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const [confirmpass, setConformpass] = useState('');
  const [error,setError] = useState('');
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  
    
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    
    if(user){
      navigate(from,{replace: true})
    }
    
    const hendelemailpassowerlogin =()=>{
      if(password ===confirmpass){
        
          createUserWithEmailAndPassword(email, password)
              .then((userCredential) => {
                  // send verification mail.
                  sendEmailVerification();
                  
                  
                  alert("Email sent");
              })
              .catch(alert);
      
      }
      else{
        setError('Passwords do not match')
      }
      
    }
  



    return (
        <div className='md:mx-auto md:w-1/2  rounded-3xl mt-4  '>
    <Card className='items-center bg-green-600 py-3' color="" shadow={false}>
      <Typography variant="h4" color="white">
        Sign Up
      </Typography>
      <Typography color="white" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col  gap-6">

          <Typography variant="h6" color="white" className="-mb-3">
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
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
                    <Typography variant="h6" color="white" className="-mb-3">
            Conform Passwoed
          </Typography>
          <Input
          onChange={(e) => setConformpass(e.target.value)}
           type='password'
            size="lg"
            placeholder="*******"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {
          error && <Typography className='text-red-600 font-semibold '>Pleas check you Email or Password</Typography>
        }
        </div>
        
        <Button onClick={hendelemailpassowerlogin} className="mt-6" fullWidth>
          sign up
        </Button>
       
        <Typography className='text-center text-white my-2'>Or</Typography>
        <Button onClick={()=>signInWithGoogle()} className="mt-6 flex-wrap flex items-center gap-2 w-full justify-center"><FaGoogle className='size-5'></FaGoogle>-Sing in</Button>
        <Typography color="white" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/singin"><span className='text-black font-bold hover:text-yellow-600'>Sing in</span></Link>
        </Typography>
      </form>
    </Card>
  
 </div>
    );
};

export default Login;