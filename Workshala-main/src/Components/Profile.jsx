import React from "react";
import Navbar from "./Navbar";
import profile from '../assets/profile.png'
import { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Auth/authReducer";
import { useNavigate } from "react-router-dom";
function Profile() {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const [profileData, setProfileData] = useState(null);
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
              const response = await fetch('https://workshala.onrender.com/dashboard', {
                credentials: 'include', 
              });
              if (response.ok) {
                const data = await response.json();
                console.log("Profile Data:", data);
                setProfileData(data);
              } else {
                console.error("Error fetching profile data. Status:", response.status);
              }
            } catch (error) {
              console.error("Error fetching profile data", error);
            }
          };
        fetchProfileData();
      }, []); 
    const log=()=>{
        window.localStorage.setItem("login",false);
        document.cookie = 'login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path="/";';
        dispatch(logout())
        navigate('/');
    }
    return( 
    <>
    <Navbar/>
    <div >
    {profileData ? (
        <div className="flex flex-wrap justify-center my-4 font-sans">
        <div className="h-50 bg-custom-bg bg-opacity-60 w-3/4 rounded-3xl overflow-hidden ">
            <div className="flex flex-wrap justify-evenly m-5">
                <div className="flex flex-wrap justify-evenly gap-6">
            <div className="hidden md:block"><img src={profile}/></div>
            <div className="">
                <div className="text-[1.75rem] font-semibold">{profileData.name}</div>
                <div className="text-[1.25rem] font-semibold">{profileData.email}</div>
                <div className="text-[1.25rem] font-semibold">{profileData.contact}</div>

                <div className="hidden md:block">Ajay Kumar Garg Engineering College</div>
            </div>
            </div>
            <div className=" flex-wrap gap-6 items-center justify-center hidden md:flex">
                <div><button className="bg-custom-bg rounded text-white py-2 px-8 hover:bg-white hover:text-custom-text hover:border-2">Edit </button></div>
                <div><button className="bg-custom-bg rounded text-white p-2 hover:bg-white hover:text-custom-text hover:border-2">Your Resume</button></div>
            </div>
            </div>
        </div>
        </div> 
               ) : (<p>Loading...</p>
               )}
        <div className=" justify-center flex items-center">
            <div className="border-2 border-customColor rounded-xl h-auto w-4/5 p-5">
                <div className="text-2xl font-semibold justify-evenly ">Your Details</div>
                <div className="my-10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</div>
            </div>
        </div>
        <div><button onClick={log} className="ml-[11rem] mt-10 bg-custom-bg rounded text-white py-2 px-8 hover:bg-white hover:text-custom-text hover:border-2">Log Out</button></div>
    </div>
    </>
    )
}
export default Profile