import React from 'react';

export default function HomePage({ jobs }) {
  return (
    <div className="flex p-4 bg-[#f4f4f4] l:w-[1380px] flex-col md:flex-row min-h-screen">
      {/* Left Section - Job Profile Detail (30%) */}
      <aside className="rounded-lg w-full h-[30%] md:w-1/3 lg:w-1/4 bg-white border-r border-gray-200">
        {/* <h2 className="text-xl font-semibold mb-4">Profile Details</h2> */}
        <div className="space-y-2 align-center">
          <img className='profile-bg w-[100%]' src="bgProfile.png" alt="na" />
          <img className='m-auto mt-[-48px]' src="profile.png" alt="na" />
          <div className='p-4'>
            <p> <strong> Albert Flores </strong></p>
            <p>Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...</p>
            <p> Clinton, Maryland</p>
          </div>
          {/* Add more profile data here */}
        </div>
      </aside>

      {/* Right Section - Job Listings (70%) */}
      <main className="w-full md:w-2/3 lg:w-3/4 p-4 ">
        <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {jobs.map((job, index) => (
            <div key={index} className="flex flex-col justify-start p-4 bg-white shadow rounded-2xl">
              <strong className="ml-4 text-left text-sm text-gray-800">Promoted</strong>
              <div className='flex align-text'>
                  <img className='ml-4 mt-2' width={50} height={40} src="teams.png" alt="no" />
                  <p className="ml-4 text-lg text-left text-gray-800">{job.title}</p>
              </div>
              <div className='mt-2 flex items-center justify-start'>
                <img className='ml-6' src="location-icon.png" alt="na" />
                <p style={{fontSize: "12px"}} className='ml-4 font-design'>{job.location}</p>
              </div>
              <div className='mt-2 flex items-center'>
                <img className='ml-6' src="duration-icon.png" alt="na" />
                <p style={{fontSize: "12px"}} className='ml-4 font-design'>{job.time}</p>
                <p style={{fontSize: "12px"}} className='ml-4 font-design'>|</p>
                <p style={{fontSize: "12px", color: "#0154AA"}} className='ml-4 font-design'>{job.applicants}</p>
              </div>
              <div className='mt-4 items-center flex justify-between'>
                <button className=" py-2 bg-blue-600 text-white rounded hover:bg-blue-700 build-resume">
                  Apply Now
                </button>
                <img className='h-[33px] w-[max content]' src="Vector.png" alt="no" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}