import React from "react";
import tutorial from '../assets/Tutorials.png';

function Services() {
  const styles = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .animate-slide-in-right {
      animation: slideInRight 0.5s ease-out;
      transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    }
  `;

  return (
    <div className="bg-service-bg h- bg-opacity-20 flex-col flex-wrap">
      <style>{styles}</style>
      <div className="">
        <div className="justify-center items-center flex flex-wrap">Services</div>
        <div className="justify-center items-center flex text-3xl font-bold">Our Services</div>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="flex justify-evenly flex-wrap gap-8 m-8 mr-4">
          <div className="animate-slide-in-right" style={{ animationDelay: '1s' }}>
            {/* Your Internship Card */}
            <div className="text-black w-60 h-60 flex-col justify-center items-center border-2 bg-white rounded-xl hover:text-blue-500 hover:shadow-custom">
              <div className="justify-center items-center flex m-2"><img src={tutorial} alt="Internship"/></div>
              <div className="text-2xl justify-center items-center flex m-4 font-semibold">Internships</div>
              <div className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
          </div>
          <div className="animate-slide-in-right" style={{ animationDelay: '2s' }}>
            {/* Your Jobs Card */}
            <div className="text-black w-60 h-60  border-2 bg-white rounded-xl hover:text-blue-500 hover:shadow-custom">
              <div className="justify-center items-center flex m-2"><img src={tutorial} alt="Jobs"/></div>
              <div className="text-2xl justify-center items-center flex m-4 font-semibold">Jobs</div>
              <div className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap gap-8 m-8 ml-4">
          <div className="animate-slide-in-right" style={{ animationDelay: '3s' }}>
            {/* Your Courses Card */}
            <div className="text-black w-60 h-60  border-2 bg-white rounded-xl hover:text-blue-500 hover:shadow-custom">
              <div className="justify-center items-center flex m-2"><img src={tutorial} alt="Courses"/></div>
              <div className="text-2xl justify-center items-center flex m-4 font-semibold">Courses</div>
              <div className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
          </div>
          <div className="animate-slide-in-right" style={{ animationDelay: '4s' }}>
            {/* Your Placement Card */}
            <div className="text-black w-60 h-60  border-2 bg-white rounded-xl hover:text-blue-500 hover:shadow-custom">
              <div className="justify-center items-center flex m-2"><img src={tutorial} alt="Placement"/></div>
              <div className="text-2xl justify-center items-center flex m-4 font-semibold">Placement</div>
              <div className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;