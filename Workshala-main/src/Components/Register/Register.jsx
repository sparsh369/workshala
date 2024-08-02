import React, { useState } from 'react'
import registerImg from '../../assets/register.svg'
import Eye from '../../assets/eye.svg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SyncLoader from "react-spinners/SyncLoader"

function Register() {
  const email_valid= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]{2,}$/;
  const number_valid=/^[6-9]\d{9}$/;
  let [loading, setLoading] = useState(false);
  let [passwordValid,setPasswordValid]=useState(false);
  const[password,setPassword]= useState(true);
  const eyeClick=()=>{
    setPassword(!password)
  }
  const navigate= useNavigate();
  let [er,setEr]=useState(''); 
   const data={
    name: "",
    number: "",
    email: "" ,
    password: ""
     }
    const [inputData, setInputData] = useState('');
  


    const handleChange = (event) => {
      setInputData({...inputData, [event.target.name]:event.target.value});
    };
  


    const handleSubmit = async(event) => {
      event.preventDefault();
      setPasswordValid(false)
      setLoading(true)
      if(email_valid.test(inputData.email) && number_valid.test(inputData.number)){
      
     try{
      
      const response = await axios.post("https://workshala.onrender.com/signUp",inputData);
      setLoading(false)
          console.log(response)
          toast("verify your email")
          
          setTimeout(() => {
            // Navigate to the next page using useNavigate
            navigate('/welcome');
          }, 5600);
      
  }catch(err){
  setLoading(false)
  console.log(err.response.data.errors)
  if(err.response){
  console.log('Server responded');
  if(err.response.status===409)
  {
    
    toast.error("user already exists");
  }
  if(err.response.status===400){
    
    setPasswordValid(true);
  }
  // else{
  // setErrorPassword(err.response.data.message);
  // }}
  // else
  //   console.log('No Server response');
  // setLoading(false);
  }
  }
      }
      else{
      setLoading(false)
      if(!email_valid.test(inputData.email) && number_valid.test(inputData.number)){
        toast.error("enter valid email")
      }
      else if(email_valid.test(inputData.email) && !number_valid.test(inputData.number)){
        toast.error("enter valid number")
      }
      else{
        toast.error("enter valid data")
      }
    }

    };
  return (
    <>
     <div>{loading ? <>
     <div  className=' fixed top-0 left-0 pl-19 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50'>
     <SyncLoader color='white' className='justify-center' />
     </div>
     </> : null}</div>
        < div className='flex flex-wrap flex-row max-[1156px]:justify-center ' >
      <img className=' h-[90vh] ml-[10vw] mt-[3vh] max-[500px]:h-[50vh] max-[500px]:p-1' src={registerImg}/>
      <div className='flex flex-wrap flex-col mt-[4rem]'>
        <div className='font-WorkSans font-semibold text-[3.5rem] mt-[1.5rem] ml-[3.5rem] max-[1156px]:mt-0 max-[640px]:text-[8vw] max-[500px]:ml-8 '>Register</div>
        <div className=''>{}</div>
        <div className='flex flex-wrap flex-col '>
            <form onSubmit={handleSubmit}>
            <div className='flex flex-wrap flex-col'>
            <div className=" flex flex-wrap font-WorkSans font-medium text-base ml-[3.5rem] mt-[3.5rem] mb-0  max-[500px]:ml-8">Name</div>
            <input type="text" onChange={handleChange} required name="name" value={inputData.name} className="flex flex-wrap border border-black rounded-md font-WorkSans text-base w-[26rem] ml-[3.5rem] h-[2.5rem] pl-3 max-[640px]:w-[65vw] max-[500px]:ml-8  " placeholder='Enter Your Name' />
            
            <div className="flex flex-wrap font-WorkSans font-medium text-base ml-[3.5rem] mt-4 p-0 max-[500px]:ml-8">Phone Number</div>
            <input type="text"  onChange={handleChange} required name="number" value={inputData.number} className="flex flex-wrap border border-black appearance-none rounded-md font-WorkSans text-base w-[26rem] ml-[3.5rem] h-[2.5rem] pl-3 max-[640px]:w-[65vw] max-[500px]:ml-8" placeholder='Enter Your Phone Number' />
            <div className="flex flex-wrap font-WorkSans font-medium text-base ml-[3.5rem] mt-4 p-0 max-[500px]:ml-8">Email</div>
            <input type="email"  onChange={handleChange}  required name="email" value={inputData.email} className="flex flex-wrap border border-black rounded-md font-WorkSans text-base w-[26rem] ml-[3.5rem] h-[2.5rem] pl-3 max-[640px]:w-[65vw] max-[500px]:ml-8" placeholder='Enter Your Email' />
            <div className=" font-WorkSans font-medium text-base ml-[3.5rem] mt-4 p-0 flex flex-wrap max-[500px]:ml-8">Password</div>
            <div className="flex border border-black rounded-md w-[26rem] ml-[3.5rem] max-[640px]:w-[65vw] max-[500px]:ml-8 max-[390px]:w-[65vw]">
            <input type={password? "password" : "text"} required onChange={handleChange} value={inputData.password} name="password" className="focus:border-none focus:outline-none font-WorkSans text-base w-[24rem]  h-[2.5rem] pl-3 max-[640px]:w-[58vw] " placeholder='Enter Your Password' />
            <img className='cursor-pointer  max-[640px]:ml-0' onClick={eyeClick} src={Eye} />
            </div>
            </div>
            <div className='font-WorkSans text-base w-[26rem] ml-[3.5rem] max-[390px]:w-[65vw] max-[640px]:w-[65vw] max-[500px]:ml-8 text-[#ff0000]'>{ passwordValid ? ("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 8 characters long"):(null)}</div>
            <div>
            <button  className='font-WorkSans font-medium text-sm text-white w-[26rem] rounded-md h-[2.5rem] mt-6 bg-[#946CC3] ml-[3.5rem] max-[640px]:w-[65vw] max-[500px]:ml-8'>Sign up</button>
            </div>
            </form>
            <div className='ml-[10rem] mt-[1rem] font-WorkSans font-medium max-[640px]:ml-[25vw]  max-[500px]:ml-[15vw]  max-[500px]:w-[57vw] '>Already Registered ! <Link to='/login'> <button className='text-[#946CC3]'> Login</button> </Link></div>

        </div>

      </div>
      </div>
      
      <ToastContainer/>
    </>
  )
}

export default Register
