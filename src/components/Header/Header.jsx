import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from '../container/Container'
import { Link } from 'react-router-dom'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import TimeDisplay from './TimeDisplay'


// icons
import { HiSpeakerWave } from "react-icons/hi2";
import { IoIosPower } from "react-icons/io";
import { PiNetworkFill } from "react-icons/pi";
import { MdBrightnessMedium } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import { MdOutlineAccessibilityNew } from "react-icons/md";




function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const HandleLOgOut = async () => {
    console.log("logout");
    const signingOff = await authService.logOut()
    if (signingOff) {
      dispatch(logout())
      navigate("/login")
    }
  }


  return authStatus ?
    <div className='w-full'>
      <header>
        <nav className="w-full px-3 py-1 bg-white border-gray-200   dark:bg-gray-800">
          <div className="relative flex flex-wrap items-center justify-between mx-auto ">
            <div className="hidden justify-start items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link to="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:p-0 dark:text-white" aria-current="page">Activities</Link>
                </li>
                <li>
                  <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Active Apps</Link>
                </li>
              </ul>
            </div>

            <div className="absolute w-full flex justify-center align lg:order-2">
              <button className='text-white'>
                <TimeDisplay/>
              </button>
            </div>

            <div className="flex justify-end lg:order-2">
              <button className='text-white flex'>
                <MdOutlineAccessibilityNew />&nbsp;
                <GoTriangleDown />
              </button>&nbsp;&nbsp;&nbsp;&nbsp;


              <button className='text-white flex'>
                <MdBrightnessMedium />&nbsp;&nbsp;
                <PiNetworkFill />&nbsp;&nbsp;
                <HiSpeakerWave />&nbsp;&nbsp;
                <IoIosPower />&nbsp;
                <GoTriangleDown />
              </button>



              {/* 
              <button onClick={()=>{HandleLOgOut()}} style={{ cursor: "pointer"}} className=" text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Sign Out </button>
              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
              </button> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
    :

    <div className='w-full py-3 shadow'>
      <header>
        <nav className="w-full bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

            <Link to="https://flowbite.com" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </Link>

            <div className="flex items-center lg:order-2">
              <Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
              <Link to="/signup" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</Link>
              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
              </button>
            </div>

          </div>
        </nav>
      </header>
    </div>
}

export default Header
