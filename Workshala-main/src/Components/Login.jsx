import React, { useState } from 'react'
import loginImg from '../assets/login.svg'
import Eye from '../assets/eye.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SyncLoader from "react-spinners/SyncLoader";
import { useDispatch } from "react-redux";
import { login } from "../Auth/authReducer";

export default function Login() {
  const dispatch = useDispatch();
  const email_valid= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]{2,}$/;
  let [loading, setLoading] = useState(false);
  const[password,setPassword]= useState(true);
  const eyeClick=()=>{
    setPassword(!password)
  }
  const navigate= useNavigate();
  const data={
    email: "" ,
    password: ""
     }
    const [inputData, setInputData] = useState('');
    const handleChange = (event) => {
      setInputData({...inputData, [event.target.name]:event.target.value});
    };
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      setLoading(true)
      if (email_valid.test(inputData.email)) {
        try {
          const response = await axios.post("https://workshala.onrender.com/login", inputData, { withCredentials: true,});
          const { data } = response; 
          if (data.message === 'Login Successful') {
            const cookies = response.headers['set-cookie'];
            
            if (cookies) {
              cookies.forEach((cookie) => {
                document.cookie = cookie;
              });
            }
            console.log(response);
            setLoading(false);
            window.localStorage.setItem("login",true); 
            dispatch(login());
            navigate('/');
          }
   }catch(err){
    setLoading(false)
   if(err.response){
   console.log('Server responded');
   if(err.response.status===401)
   {
     
     toast.error("user not found");
   }
   if(err.response.status===409)
   {
     
     toast.error("user already exists");
   }
   }
   }
  }
  else{
    toast.error("enter valid email")
  }

    };

  
  return (
    <>
    <div>{loading ? <>
     <div  className=' fixed top-0 left-0 pl-19 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50'>
     <SyncLoader color='white' className='justify-center' />
     </div>
     </> : null}</div>
    <div className='flex flex-wrap flex-row max-[1024px]:justify-center' >
      <img className=' h-[90vh] ml-[13vw] mt-[2vh] max-[640px]:ml-0 max-[640px]:h-[30rem] max-[420px]:mt-0 max-[420px]:h-[20rem]' src={loginImg}/>
      <div className="mt-[10vh] ml-[5vw] flex flex-wrap flex-col max-[420px]:mt-0  max-[420px]:pt-0 max-[640px]:m-0 ">
        <div className="loginHead font-WorkSans font-medium text-[3.5rem] max-[640px]:text-[9vw] max-[420px]:text-[12vw] ">Login</div>
        <div className="mt-[9vh] flex flex-wrap flex-col ">
          <div className=" font-WorkSans font-medium text-base flex">Email</div>
          <form>
          <div className="flex">
            
            <input type="email" required name="email" onChange={handleChange} value={inputData.email} className="border border-black rounded-md font-WorkSans text-base w-[20rem] h-[3rem] pl-4 max-[640px]:w-[50vw]  max-[420px]:w-[70vw] " placeholder='Enter your email' />
          </div>
          <div className="mt-2 font-WorkSans font-medium flex text-base">Password</div>
          <div className="flex border border-black rounded-md max-[640px]:w-[50vw]  max-[420px]:w-[70vw] ">
            <input type={password? "password" : "text"} required name="password" onChange={handleChange} value={inputData.password} className="focus:border-none focus:outline-none font-WorkSans text-base w-[18rem] h-[3rem] pl-4 max-[640px]:w-[45vw]  max-[420px]:w-[63vw] " placeholder='Enter your Password' />
            <img className='cursor-pointer ' onClick={eyeClick} src={Eye} />
          </div>
          <div className="flex  flex-row mt-[1vh] max-[640px]:w-[50vw] ">
            <div className="">
              <input type="checkbox" className='' name='rememberMe' />
              
            </div>
            <div className='font-WorkSans font-medium text-sm mt-0.5 ml-0.5'>Remember Me</div>
            <div className='ml-[25%] font-WorkSans font-medium text-sm  mt-0.5 max-[640px]:ml-[12vw]'> <Link to='/reset'> <button>Forgot password?</button></Link></div>
          </div>
         <div>
            <button onClick={handleSubmit}  className='font-WorkSans font-medium text-sm text-white w-[20rem] rounded-md h-[2.5rem] mt-5 bg-[#946CC3] max-[640px]:w-[50vw] max-[420px]:w-[70vw]'>Sign in</button>
         </div>
         
         </form>
         <div className='mt-[2vh] ml-[1rem] font-WorkSans font-medium max-[640px]:w-[50vw] '>Haven't Registered Yet! <Link to='/register'> <button className='text-[#946CC3]'> Register Now</button></Link> </div>
        </div>

      </div>
    </div>
    <ToastContainer/>
    </>
  )
}