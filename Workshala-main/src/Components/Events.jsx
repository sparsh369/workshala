import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import contest from  '../assets/contest.png'

    const Contest = () => (
    <div className="h-22.5rem w-28.125rem justify-center border-1 border-black">
    <div><img src={contest} className="rounded-t-3xl"/></div>
    <div>
        <div>
            <div className="bg-pink"></div>
            <div>
                <div className="font-semibold text-2xl ml-1">Beginner Contest 46</div>
                <div className="m-1 ">Coding Ninjas</div>
            </div>
        </div>
        <div className="p-2 sm:border-2 mr-40 rounded-2xl my-5">Data Structures and Algorithm</div>
        <div className="flex  flex-wrap gap-6">
            <div className="m-1">
                <div></div>
                <div>1 Nov,9:00 PM</div>
            </div>
            <div className="m-1">
                <div></div>
                <div>474 Enrolled</div>
            </div>
        </div>
    </div>
    </div>
)

const Events = () => {
    const Totalcontests = 8;
   
    

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        dots: false,
        autoplay: true,
       autoplaySpeed: 2000,
      
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
      };


      return (
        <div className="flex-col justify-evenly items-center mt-20 ">
          <div className="flex justify-center items-center m-4">Events</div>
          <div className="flex justify-center items-center m-4 text-3xl font-bold">
            Upcoming Events and Challenges 
          </div>
          <div className="m-8 block bg-white">
            <Slider {...sliderSettings}>
              {[...Array(Totalcontests)].map((_, index) => (
                <Contest key={index} />
              ))}
            </Slider>
          </div>
        </div>
      );
    };

    export default Events;