import React from "react";
import Homeicon from '../assets/Homeicon.png'
import Hand from '../assets/Hand.png'
function Homeframe () {
    return(
       <div className="flex justify-center lg:justify-between">
        <div  className="flex-col lg:w-2/5 lg:justify-evenly lg:my-40 lg:ml-40 justify-center item-center">
        <div className="lg:hidden justify-center items-center flex m-5 md:m-0"><img src={Homeicon} style={{height:'15rem' , width:'20rem'}}/></div>
        <div className="m-8 md:m-0"> 
          <div className="flex ">
            <div><img src={Hand}/></div>
            <div className="text-custom-text">WELCOME TO WORKSHALA</div>
          </div>
          <div className="text-3xl font-bold" >Best Place To<br></br> Get You Placed</div>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
             specimen book.</div>
             <div className="flex mt-4">
          <div className="gap-8 flex flex-wrap  ">
            <div><button className="bg-custom-bg rounded text-white p-2 hover:bg-white hover:text-custom-text border-2 hover:border-2">Read More</button></div>
            <div><button className="border-2 p-2 rounded text-custom-text hover:bg-custom-bg hover:text-white">Start Today</button></div>
          </div>
          </div>
          </div>
        </div>
        <div className="w-3/5 hidden lg:block"><img src={Homeicon} style={{ height : '31.668rem'}}/></div>
       </div>
    )
}
export default Homeframe