import React from "react";
import playstore from '../assets/Playstore.png'
import appstore from '../assets/AppStore.png'
import facebook from '../assets/facebook logo.png'
import twitter from '../assets/twitter logo.png'
import instagram from '../assets/instagram logo.png'
import linkedin from '../assets/Linkedin.png'


 function Footer() {
    return(
     <div className="flex-col flex-wrap mt-20">
        <div className="bg-custom-bg w-full h-80 flex flex-wrap md:justify-between justify-center overflow-hidden">
          <div className="flex-col flex-wrap md:justify-evenly justify-center"> 
            <div className="text-2xl font-semibold md:m-10 md:mx-20 m-5 ml-12" >Important Links</div> 
            <div className="flex flex-wrap  text-xl m-20 my-10 gap-8 font-semibold "> 
                <div>
                    <ul >
                        <li className="mb-3">About us</li>
                        <li className="mb-3">Careers</li>
                        <li className="mb-3">Employers Home</li>
                        <li className="mb-3">Sitemap</li>
                    </ul>
                </div>
                <div className="hidden sm:block"> <ul>
                        <li className="mb-3">Help Center</li>
                        <li className="mb-3">Summons/Notices</li>
                        <li className="mb-3">Grievances</li>
                        <li>Report issue</li>
                    </ul></div>
                <div className="hidden md:block"> 
                <ul>
                        <li className="mb-3">Privacy Policy</li>
                        <li className="mb-3">Terms & Condition</li>
                        <li className="mb-3">Fraud alerts</li>
                        <li className="mb-3">Trust & safety</li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="flex-col flex-wrap m-10 hidden md:block rounded-2xl">
            <div className="text-xl font-semibold m-2">Email Your Query</div>
            <div className="bg-custom-bg m-2 rounded-xl"><input class="border-2  p-2 text-black   w-3/4" type="text" placeholder="Enter your email-here"/>
            <button className="rounded px-8 py-[0.5rem]  border-2 ">Sign Up</button>
            </div>
            <div className="flex-col rounded bg-[#DEC1FF]  m-2">
                <div className="text-2xl mx-4">Apply on the go</div>
                <div className="text-custom-text text-xl m-4">Get real-time job updates on our App</div>
                <div className="flex">
                  <div><img src={playstore}/></div>
                  <div><img src={appstore}/></div>
                </div>
            </div>
          </div>
        </div>
        <div className="bg-footer2-bg h-20 flex flex-wrap justify-evenly overflow-hidden">
            <div className="flex flex-wrap  gap-20 w-1/2 justify-center items-center">
            <div className="">
          <div>
            <div className="flex text-2xl" >
           <div className="text-custom-text">WORK</div><div className="text-footer-text2">SHALA</div></div>
          </div>
          <div className="text-white">Connect with us</div>
        </div>
        <div>
            <div className="text-white text-2xl mb-3">Join with us</div>
            <div className="flex gap-8"><img src={instagram}/><img src={twitter}/><img src={facebook}/><img src={linkedin}/></div>
        </div>
        </div>
        <div className="text-white text-xl mt-2 w-1/2 text-center hidden md:block">
            <div>Help line number</div>
            <div className="flex gap-3 justify-center">
                <li>1900-2000-4992</li>
                <li>1900-2000-4992</li>
            </div> 
        </div>
        </div>
     </div>
    )
 }
 export default Footer