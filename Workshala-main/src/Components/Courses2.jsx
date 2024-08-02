import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CoursesCard from './CoursesCard';

function Courses2() {
    const titleArray = ["UI/UX Designing","UI/UX Designing", "Web Development" ,"Robotics", "Robotics"];
    const iterations = Array.from({ length: 9 }, (_, index) => index);
  return (
    <>
    <Navbar/>
    <div className='font-WorkSans flex font-semibold text-[1.4rem] py-[2rem] pl-[3.2rem] bg-[#FFF6F9]'>Courses for you </div>
    <div className='flex flex-wrap justify-around mx-[2rem]'>
      {iterations.map((iteration) => (
        <CoursesCard key={iteration} />
      ))}
      
    </div>
    <Footer/>
    </>
  )
}

export default Courses2
