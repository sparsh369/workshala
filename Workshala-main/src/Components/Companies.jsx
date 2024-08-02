import React from "react";
import { useEffect,useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card } from "./ComapaniesCard";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader"
function Companies () {
    const [apiData, setApiData] = useState([]);
    const [locationFilter, setLocationFilter] = useState("");
    const [industryFilter, setIndustryFilter] = useState("");
    const [companyTypeFilter, setCompanyTypeFilter] = useState("");
    let [loading, setLoading] = useState(true);
    const numberOfCards = 15;
    const cards = [];
    useEffect(() => {
      axios
        .get("https://workshala.onrender.com/getCompanies")
        .then((response) => {setApiData(response.data)
          setLoading(false)
        }
        )
        .catch((error) => {console.error("Error fetching data:", error)
        setLoading(false)
      }
        );
    }, []); 

    const filteredData = apiData
    
    .filter(
      (company) =>
        !locationFilter || company.location.includes(locationFilter)
    )
    .filter(
      (company) =>
        !industryFilter || company.industry === industryFilter
    )
    .filter(
      (company) =>
        !companyTypeFilter || company.companyType === companyTypeFilter
    );


      for (let i = 0; i < numberOfCards; i += 3) {
      cards.push(
        <div key={i} className="flex justify-evenly my-5 md:my-10 flex-wrap">
        {filteredData.slice(i, i + 3).map((company, index) => (
        <Card key={index} company={company} />
        ))}
        </div>
      );
    }
    return(
        <>
        <div>{loading ? <>
     <div  className=' fixed top-0 left-0 pl-19 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50'>
     <SyncLoader color='white' className='justify-center' />
     </div>
     </> : null}</div>
        <Navbar/>
        <div>
            <div className="flex items-center py-10 pl-10 bg-service-bg bg-opacity-10 mb-10 mt-5">
                <p className="text-3xl font-bold font-worksans text-worksans">Featured Companies Actively Hiring</p>
            </div>
            <div className="md:flex md:justify-evenly justify-center items-center mb-10 "> 
               <div className=" flex justify-center items-center">
                <div class="w-64 my-10 md:m-0 ml-3">
                <select
                 value={locationFilter}
                 onChange={(e) => setLocationFilter(e.target.value)}
                class="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow-custom "
                >
                <option value="">Location</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Greater Noida">Greater Noida</option>
                <option value="Noida">Noida</option>
                </select>
                </div>
                </div>
                <div className=" flex justify-center items-center">
                <div class="w-64 my-10 md:m-0 ml-3">
                <select 
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                class="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow-custom"
                >
                <option value="">Industry</option>
                <option value="Consultancy , IT Services">Consultancy , IT Services</option>
                <option value="Product Based">Product Based</option>
                <option value="IT Services">IT Services</option>
                <option value="Database Technology">Database Technology</option>
                <option value="Transport And Goods">Transport and Goods</option>
                <option value="Electronics">Electronics</option>
                <option value="Edtech">Edtech</option>

                </select>
                </div>
                </div>
                <div className="flex justify-center items-center">
                <div class="w-64 my-10 md:m-0 ml-3 ">
                <select
                 value={companyTypeFilter}
                 onChange={(e) => setCompanyTypeFilter(e.target.value)}
                class="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow-custom"
                >
                <option value="">Company Type</option>
                <option value="Foreign MNC">Foreign MNC</option>
                <option value="Indian MNC">Indian MNC</option>
                </select>
                </div>
                </div>
            </div>
            {/* Cards  Starts*/}
             <div>
            
            {filteredData.length > 0 ? (
  <div className="bg-service-bg bg-opacity-10 flex-wrap md:m-0">
    {cards}
  </div>
) : (
  <p>No companies match the applied filters.</p>
       )}
         
             </div>
            {/* Cards  Ends*/}
        </div>
        <Footer/>
        </>
    )
}
export default Companies