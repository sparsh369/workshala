import { useState } from 'react';
import React from "react";
import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import profile from "../assets/profile.svg"

function Navbar () {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const hamburger = () => {
    setShowMenu(!showMenu);
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
   <div className="w-full  flex justify-between px-4 md:px-8 items-center  md:h-20 h-max">
    <div className="flex justify-between w-1/3 gap-20">
      <Link to= '/'>
    <div className="flex text-3xl font-semibold font-inter">
    <div className="text-custom-text">WORK</div>
    <div className='text-footer-text2'>SHALA</div>
    </div>
    </Link>
    <ul className='lg:flex hidden gap-6 text-xl m-2 '>
       <Link to='/'> <li className="hover:text-custom-text">Home</li></Link>
       <Link to='/courses'> <li className='cursor-pointer hover:text-customColor'>Services</li></Link>
         <Link to='/companies'><li className='hover:text-customColor'>Companies</li></Link>
         <Link to='/jobs'><li className='hover:text-customColor'>Jobs</li></Link>
    </ul>
    
    </div>
    {isAuthenticated ? (<div className="lg:flex hidden  justify-center place-items-center">
                    <Link to="/profile">
                        <button
                            // onClick={() => navigate("/applications")}
                            className="w-[120px] h-[30px] py-1 outline outline-1 outline-[#946cc5] rounded-lg font-medium hover:bg-[#946cc5] hover:text-white mx-8 text-xs"
                        >
                            Your Task
                        </button>
                    </Link>
                    <Link to="/profile" className="w-[90px]">
                        <img
                            className="w-[40px] cursor-pointer"
                            src={profile}
                            alt=""
                        />
                    </Link>
                </div>):
    (    <div className="lg:flex hidden gap-5 text-xl justify-center items-center">
    <Link to='/login'><div className='cursor-pointer hover:bg-custom-bg py-2 px-4 hover:text-white border-2 rounded-sm'>SignIn</div></Link>
    <div>
    <Link to='/register'><button className="bg-custom-bg rounded text-white py-2 px-4 hover:bg-white hover:text-custom-text hover:border-2 border-2">Register</button> </Link></div>
</div>
)
    }
   
    <div className='mt-20 lg:hidden'>
    <ul className={` lg:hidden ${showMenu ? "flex-col" : "hidden" } flex-col justify-center items-center absolute w-full top-20 right-0 bg-white border-2 border-customColor`}>
          <Link to="/">
            {" "}
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Home</div>
          </Link>
          <Link to="/courses">
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Services</div>
            </Link>
          <Link to="/companies">
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Companies</div>
          </Link>
          <Link to="/jobs">
            <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Jobs</div>
          </Link>
          {isAuthenticated ?(<div className="">
          <Link to='/profile'><div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Task</div></Link>
      
  
      <Link to='/profile'>
         <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Profile</div></Link>
      
                </div>):( <> <Link to='/register'><div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Register</div></Link>
      
  
      <Link to='/login'> <div  className='p-2 my-2 rounded-md  w-[100%] flex justify-center items-center hover:bg-customColor'>Login</div></Link>
      </>)}
  </ul>
 
        
        </div>

    <div className="lg:hidden" onClick={hamburger}>
      <FaBars/>
    </div>
   </div>
  )
}
export default Navbar
