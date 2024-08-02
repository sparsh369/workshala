import React from 'react'
import courses from "../assets/courses.svg";
import coursesEllpise from "../assets/coursesEllipse.svg";
import star from "../assets/star.svg";
import user from "../assets/user.svg";
function CoursesCard(props) {
  return (
    <>
    <div className="w-[367px] mt-12 rounded-lg shadow-xl cursor-pointer">
        <img src={courses} className=" w-[] h-[] rounded-lg"/>
        <h2 className="ml-8 mt-2 text-lg font-bold">{props.title[0]}</h2>
        <div className="flex mt-3 place-items-center">
            <img src={coursesEllpise} className="ml-8 mr-3 w-[50px] h-[50px]"/>
                <p className="text-xs">Aman Kumar <br />IITian from BHU, 3year of experience</p>
        </div>
        <hr className="h-[1px] bg-gray-600 mt-12" />
        <div className="flex mx-6 py-3 place-items-center justify-between">
             <h2 className="text-[#0FEBE4] font-bold">FREE</h2>
                <div className="flex">
                    <div className="flex place-items-center">
                        <img src={star} className="w-[15px] h-[15px]"/>
                        <h6 className="text-xs">3 star</h6>
                    </div>
                    <div className="flex ml-3">
                        <img src={user} className=""/>
                        <h6 className="text-sm">321 enrolled</h6>
                    </div>
                </div>
        </div>
    </div>
      
    </>
  )
}

export default CoursesCard
