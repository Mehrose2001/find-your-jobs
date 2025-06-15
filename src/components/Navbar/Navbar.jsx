import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="l:w-[1380px] bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Title */}
          <div className="flex items-center">
            <img width={40} height={40} src="logo.png" className="mr-3" alt="logo" />
            <div className="text-[16px] font-bold text-[#0154AA]">Find Jobs</div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="font-design">Top Companies</a>
            <a href="#" className="font-design">Job Tracker</a>
            <a href="#" className="font-design">My Calendar</a>
            <a href="#" className="font-design">Documents</a>
            <a href="#" className="font-design">Messages</a>
            <a href="#" className="font-design">Notifications</a>
          </div>

          {/* Desktop Search & Resume */}
          <div className="hidden lg:flex items-center ml-3">
            <div className="relative">
              <img className="absolute top-2 left-2 z-10" width={16} height={16} src="search icon.png" alt="search" />
              <input className="pl-8 pr-4 py-1 border rounded search-field" placeholder="Search..." type="text" />
            </div>
            <button className="ml-3 build-resume">Resume Builder</button>
            <img className="mx-2 h-[38px] w-[38px]" src="login-profile.png" alt="profile" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <img className="mx-2 h-[38px] w-[38px]" src="login-profile.png" alt="profile" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
              aria-label="Toggle Menu"
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
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12" 
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block font-design">Top Companies</a>
          <a href="#" className="block font-design">Job Tracker</a>
          <a href="#" className="block font-design">My Calendar</a>
          <a href="#" className="block font-design">Documents</a>
          <a href="#" className="block font-design">Messages</a>
          <a href="#" className="block font-design">Notifications</a>

          {/* Mobile Search & Resume Builder */}
          <div className="mt-4 flex flex-col space-y-2">
            <div className="relative">
              <img className="absolute top-2 left-2 z-10" width={16} height={16} src="search icon.png" alt="search" />
              <input
                className="pl-8 pr-4 py-1 border rounded search-field w-full"
                placeholder="Search"
                type="text"
              />
            </div>
            <button className="build-resume w-full">Resume Builder</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
