import React, { useState } from 'react';
import JobCard from '../JobCard/JobCard';

export default function HomePage() {
    const [locationOpen, setLocationOpen] = useState(false);
  const [jobTypeOpen, setJobTypeOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [selectedJobType, setSelectedJobType] = useState("Job Type");

  const locations = ["Lahore", "Karachi", "Islamabad"];
  const jobTypes = ["Full-time", "Part-time", "Remote", "Internship"];
  return (
    <div className="flex p-6 bg-[#f4f4f4] l:w-[1380px] flex-col md:flex-row min-h-screen">
      {/* Left Section - Job Profile Detail (30%) */}
      <aside className="rounded-lg w-full h-[30%] md:w-1/3 lg:w-1/4 border-r border-gray-200">
        {/* <h2 className="text-xl font-semibold mb-4">Profile Details</h2> */}
        <div className="space-y-2 rounded-lg align-center bg-white">
          <img className='profile-bg w-[100%]' src="bgProfile.png" alt="na" />
          <img className='m-auto mt-[-48px]' src="profile.png" alt="na" />
          <div className='p-4'>
            <p> <strong style={{color: "black", fontWeight: "700", fontSize: "18px"}} className='font-design'> Albert Flores </strong></p>
            <p style={{color: "#404041", fontWeight: "400"}} className='mt-2 font-design'>Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...</p>
            <p className='font-design mt-2'> Clinton, Maryland</p>
          </div>
          {/* Add more profile data here */}
        </div>
        <div className="space-y-2 mt-4 p-6 rounded-lg align-center bg-white">
          <div className='flex justify-between'>
            <p style={{fontSize: "14px"}} className='text-lg text-left text-gray-800'> Profile Visitors </p>
            <p style={{fontSize: "14px", color: "#0154AA"}} className='font-design'>140</p>
          </div>
          <div className='w-[100%] h-[2px] bg-[#E9ECEF]'></div>
          <div className='flex justify-between'>
            <p style={{fontSize: "14px"}} className='text-lg text-left text-gray-800'>Resume Viewers </p>
            <p style={{fontSize: "14px", color: "#0154AA"}} className='font-design'>20</p>
          </div>
          <div className='w-[100%] h-[2px] bg-[#E9ECEF]'></div>
          <div className='flex justify-between'>
            <p style={{fontSize: "14px"}} className='text-lg text-left text-gray-800'>My Jobs</p>
            <p style={{fontSize: "14px", color: "#0154AA"}} className='font-design'>88</p>
          </div>
        </div>
        <div className="flex justify-between space-y-2 mt-4 px-6 py-3 rounded-lg items-center bg-white">
          <div className='flex flex-col text-start align-left'>
            <strong className='text-md text-gray-800'> My calendar </strong>
            <p style={{fontSize: "14px"}} className='font-design'> Upcoming Interviews </p>
          </div>
          <img className='w-[10px] h-[8px]' src="arrow-down.png" alt="no" />
        </div>
      </aside>

      {/* Right Section - Job Listings (70%) */}
      <main className="w-full md:w-2/3 lg:w-3/4 p-4 ">
        <header className='flex'>
          <strong style={{fontSize: "22px", color: "black"}} className='font-design'>Find Your Dream Job,</strong>
          <strong style={{fontSize: "22px", color: "#0154AA"}} className='font-design'>Albert</strong>
        </header>
        <p style={{fontWeight:"400"}} className='text-left my-2 font-design'>Explore the latest job openings and apply for the best opportunities available today!</p>

        <div className="rounded-2xl my-4 p-4 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            className="transparent w-full md:w-[40%] p-2 rounded"
            placeholder="Job Title, Company, or Keywords"
            type="text"
          />

          {/* <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto gap-4">
            <div className="hidden md:block w-[2px] h-[25px] bg-[#E9ECEF]"></div>

            <div className="flex items-center">
              <p className="mr-2 font-design">Select Location</p>
              <img className="mr-4" src="arrow-down.png" alt="na" />
            </div>

            <div className="hidden md:block w-[2px] h-[25px] bg-[#E9ECEF]"></div>

            <div className="flex items-center">
              <p className="mr-2 font-design">Job Type</p>
              <img className="mr-4" src="arrow-down.png" alt="na" />
            </div>

            <button className="py-2 bg-blue-600 text-white rounded build-resume hover:bg-white">
              Search
            </button>
          </div> */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto gap-4 relative">
      <div className="hidden md:block w-[2px] h-[25px] bg-[#E9ECEF]"></div>

      {/* Location Dropdown */}
      <div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setLocationOpen(!locationOpen)}
        >
          <p className="mr-2 font-design">{selectedLocation}</p>
          <img className="mr-4" src="arrow-down.png" alt="arrow" />
        </div>
        {locationOpen && (
          <div className="absolute bg-white shadow rounded mt-1 z-10 w-40">
            {locations.map((loc) => (
              <div
                key={loc}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedLocation(loc);
                  setLocationOpen(false);
                }}
              >
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:block w-[2px] h-[25px] bg-[#E9ECEF]"></div>

      {/* Job Type Dropdown */}
      <div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setJobTypeOpen(!jobTypeOpen)}
        >
          <p className="mr-2 font-design">{selectedJobType}</p>
          <img className="mr-4" src="arrow-down.png" alt="arrow" />
        </div>
        {jobTypeOpen && (
          <div className="absolute bg-white shadow rounded mt-1 z-10 w-40">
            {jobTypes.map((type) => (
              <div
                key={type}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedJobType(type);
                  setJobTypeOpen(false);
                }}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="py-2 bg-blue-600 text-white rounded build-resume hover:bg-blue-700 px-4">
        Search
      </button>
    </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 my-6">
          <p className="font-design mr-2">Similar:</p>
          <button className="btn-catagory">Frontend</button>
          <button className="btn-catagory">Backend</button>
          <button className="btn-catagory">Graphic design</button>
        </div>

        <JobCard promotion = {true} title = {"Feature Jobs"} catagoryLink = {"See Featured Jobs"}  />
        <JobCard promotion = {false} title = {"Recommended Jobs"} catagoryLink = {"See Recommended Jobs"}  />
        <JobCard promotion = {false} title = {"Latest Jobs"} catagoryLink = {"See Latest Jobs"}  />
      </main>
    </div>
  );
}