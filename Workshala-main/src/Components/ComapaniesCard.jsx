import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Star from "../assets/Star.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";
export const Card = ({ company, locationFilter, industryFilter, companyTypeFilter }) => {
  const isFiltered =
    (!locationFilter || company.location === locationFilter) &&
    (!industryFilter || company.industry === industryFilter) &&
    (!companyTypeFilter || company.companyType === companyTypeFilter);

  return (
    <div className={`text-black border-2 border-customColor bg-white rounded-3xl flex-col flex-wrap m-5 ${!isFiltered ? 'hidden' : ''}`}>
      {isFiltered ? (
        <>
          <div className="flex justify-evenly items-center">
            <img src={company.companyLogo} alt="Company Logo" style={{ width: 100, height: 100 }} />
          </div>
          <div className="bg-custom1-bg h-14 flex-col justify-center items-center text-center mx-24 my-10 rounded-xl overflow-hidden hidden lg:block">
            <div className="font-semibold flex justify-center items-center">
              {company.companyName}
            </div>
            <div className="flex justify-evenly items-center">
              <div>
                <img src={Star} alt="Star" style={{ height: 20 }} />
              </div>
              <div>3.3</div>
              <div>1k Reviews</div>
            </div>
          </div>
          <div className="flex justify-center items-center text-2xl font-bold">
            {company.companyName}
          </div>
          <div className="flex justify-center items-center m-5">
            {company.companyType}
          </div>
          <div className="flex justify-center my-5">
            <button className="bg-custom-bg rounded text-white py-2 px-4">
              View Jobs
            </button>
          </div>
        </>
      ) : (
        <div className="text-red-500">This company does not match the applied filters.</div>
      )}
    </div>
  );
};

const CompaniesCard = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://workshala.onrender.com/getCompanies")
      .then((response) => setApiData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
    <div>
    <div className="flex-col justify-evenly items-center">
      <div className="flex justify-center items-center m-4">Companies</div>
      <div className="flex justify-center items-center m-4 text-3xl font-bold">
        Featured Companies actively hiring
      </div>
      <div className="m-8 block">
        <Slider {...sliderSettings}>
          {apiData.map((company, index) => (
              <Card key={index} company={company} />
            ))}
        </Slider>
      </div>
    </div>
    <div className="flex justify-center items-center">
    <div>
       <Link to='/companies'><button className="bg-custom-bg rounded text-white px-4 py-3">View All Companies</button></Link>
    </div>
    </div>
    </div>
  );
};

export default CompaniesCard;
