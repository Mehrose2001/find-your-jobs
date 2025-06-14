import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomepageUI/HomePage'

function App() {
  const [count, setCount] = useState(0)
  const jobs = [
  { title: 'UI/UX Designer Teams', location: 'Seatle, USA (Remote)', time: '1 day ago', applicants: "22 applicants", promoted: true},
  { title: 'UI/UX Designer Teams', location: 'Seatle, USA (Remote)', time: '1 day ago', applicants: "22 applicants", promoted: true},
  { title: 'UI/UX Designer Teams', location: 'Seatle, USA (Remote)', time: '1 day ago', applicants: "22 applicants", promoted: true},
  { title: 'UI/UX Designer Teams', location: 'Seatle, USA (Remote)', time: '1 day ago', applicants: "22 applicants", promoted: true},
  { title: 'UI/UX Designer Teams', location: 'Seatle, USA (Remote)', time: '1 day ago', applicants: "22 applicants", promoted: true},
  { title: 'UI/UX Designer Teams', location: 'Seatle, USA (Remote)', time: '1 day ago', applicants: "22 applicants", promoted: true},
  { title: 'UI/UX Designer Teams', location: 'Seatle, USA (Remote)', time: '1 day ago', applicants: "22 applicants", promoted: true},
  
  
  // more jobs...
];
  return (
    <>
      <Navbar/>
      <HomePage jobs={jobs} />
    </>
  )
}

export default App
