import React, { useState } from 'react'
import jobs from '../../contants/jobsData'

function JobCard({title, catagoryLink, promotion}) {
    const [isPromoted, setIsPromoted] = useState(promotion);
  return (
    <>
    <div className='flex items-center mb-3 mt-6'>
            <p style={{color:'#333333'}} className='font-design'>{ title }</p>
            <button className="btn-link">
              { catagoryLink }
            </button>
          </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs.map((job, index) => (
            <div key={index} className="flex flex-col justify-start p-4 bg-white shadow rounded-2xl">
               
                {isPromoted && (
                    <strong className="ml-4 text-left text-sm text-gray-800">Promoted</strong>
                )}
                
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
                <img className='h-[26px] w-[max content]' src="Vector.png" alt="no" />
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default JobCard