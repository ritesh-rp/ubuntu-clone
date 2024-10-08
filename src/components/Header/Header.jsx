import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TimeDisplay from './TimeDisplay'
import PowerDropDown from './PowerDropDown'



function Header() {
  const authStatus = sessionStorage.getItem("userData")

  return (
    <div className='w-full z-[1000]'>
      <header>
        <nav className="w-full px-3 py-1 bg-white border-gray-200  dark:bg-gray-900">
          <div className="grid grid-cols-12">
            <div className="col-span-5">
              {authStatus &&
                <ul className="flex gap-4 font-medium">
                  <li>
                    <Link to="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:p-0 dark:text-white" aria-current="page">Activities</Link>
                  </li>
                  <li>
                    <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Active Apps</Link>
                  </li>
                </ul>}

            </div>

            <div className="col-span-2 flex justify-around">
              {authStatus &&
                <button className='text-white '>
                  <TimeDisplay />
                </button>
              }
            </div>

            <div className="col-span-5 flex justify-end items-center">
              <PowerDropDown></PowerDropDown>
            </div>

          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
