import React ,{ useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import coursesLady from "../assets/cousesLady.png";
import arrow from "../assets/arrow.svg";
import CategoriesCard from './CategoriesCard';
import CoursesCard from './CoursesCard';
import arrowMore from "../assets/arrowMore.svg";
import { Link } from 'react-router-dom';
import axios from 'axios';
import SyncLoader from "react-spinners/SyncLoader"

function Courses() {
  const [arrlength,setArrlength]=useState(6);
  const titleArray = ["UI/UX Designing","UI/UX Designing", "Web Development" ,"Robotics", "Robotics"];
  const [search, setSearch] = useState("");
 const [data,setData]=useState([]);
 let [loading, setLoading] = useState(false);
 const searchHandler = (event) => {
  setSearch(event.target.value);
};
 const handleSubmit = async () => {
  setLoading(true)
  try {
    const searchResponse = await axios.get(`https://course-recommendation-modal2.onrender.com/recommendations/${search}`);
    setData(searchResponse.data.recommendations)
    setLoading(false)
    console.log(searchResponse)
    setArrlength(searchResponse.data.recommendations.length)
  } catch (error) {
    setLoading(false)
    console.error('Error fetching data:', error);
  }
};
const iterations = Array.from({ length: arrlength},);

  return (
    <>
    <div>{loading ? <>
     <div  className=' fixed top-0 left-0 pl-19 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50'>
     <SyncLoader color='white' className='justify-center' />
     </div>
     </> : null}</div>
    <Navbar/>
    <div className='flex flex-wrap justify-between'>
    <div>
      <h1 className="font-bold text-3xl my-2 mb-9 ml-[3rem] mt-[2rem] "> Learn on Your{" "}<span className="text-[#FF5E6E]">Sche</span>dule
      </h1>
      <div className=' font-normal text-base ml-[3rem] mt-[1.5rem]'>Study any topic, anytime explore thousands of courses</div>
      <div className=' font-normal text-base ml-[3rem]'>for the lowest price ever!</div>
      <input
        className="text-xs h-[35px] px-10 py-4 w-4/5 ml-[3rem] bg-[#FFFCFC] rounded-2xl shadow-lg mt-6 focus:border-none focus:outline-none"
        type="text"
        value={search}
        onChange={searchHandler}
         placeholder="What do you want to learn?"
      />
      <div className='flex'>
      <button
       onClick={handleSubmit}
       name='search'
        className="rounded-2xl px-12 py-[10px] mt-7 bg-[#FF5E6E] text-xs text-white shadow-lg hover:bg-rose-500 w-2/6 ml-[3rem]">
        Search
      </button>
      <img src={arrow} className='ml-2 mt-8' style={{height:"2" }}/>
      </div>
    </div>
    <img src={coursesLady} alt="Star" style={{ width: "55%" }} />
    </div>
    <div className='font-WorkSans flex font-semibold text-[1.4rem] mt-[3rem] ml-[3.2rem]'>
      Courses Categories
    </div >
    <div className="flex justify-evenly w-full flex-wrap">
        {titleArray.map((item,index) => (
        <CategoriesCard name={item} key={index} />
      ))}
    </div>
    <div className='flex justify-between'>
    <div className='font-WorkSans flex font-semibold text-[1.4rem] mt-[3rem] ml-[3.2rem]'>
      Courses for you
    </div >
    <Link to='/courses2'>
    <button>
    <img src={arrowMore} className='mr-[6rem] mt-[2.5rem]'/>
    </button>
    </Link>
    </div>
    <div className='flex flex-wrap justify-around mx-[2rem]'>
      {data.map((data,index) => (
        <CoursesCard title={data} key={index} />
      ))}
      
    </div>
    

    <Footer/>
    </>
  )
}

export default Courses
