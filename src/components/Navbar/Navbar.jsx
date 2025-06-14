import React from 'react';
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-0 l:w-[1380px]   bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <img width={40} height={40} src="logo.png" className="mr-3" alt="none" />
          <div className="text-[16px] font-bold text-[#0154AA] l-[129px] mr-8">Find Jobs</div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-design">Top Companies</a>
            <a href="#" className="font-design">Job Tracker</a>
            <a href="#" className="font-design">My Calender</a>
            <a href="#" className="font-design">Documents</a>
            <a href="#" className="font-design">Messages</a>
            <a href="#" className="font-design">Notifications</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
            <div className="ml-3 align-center flex">
                <img className="mt-3 ml-2 absolute z-10 mr-[0px]" width={20} height={20} src="search icon.png" alt="none" />
                <input className="relative search-field" placeholder="Search" type="text" />
                <button className="build-resume">Resume Builder</button>
            </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex-col px-4 pb-4">
          <a href="#" className="font-design">Top Companies</a>
            <a href="#" className="font-design">Job Tracker</a>
            <a href="#" className="font-design">My Calender</a>
            <a href="#" className="font-design">Documents</a>
            <a href="#" className="font-design">Messages</a>
            <a href="#" className="font-design">Notifications</a>
        </div>
      )}
      
    </div>
  );
}