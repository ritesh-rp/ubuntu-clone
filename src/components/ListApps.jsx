import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FiSearch } from "react-icons/fi";
import { useAutoAnimate } from '@formkit/auto-animate/react'



function ListApps() {
    const [animationParent] = useAutoAnimate({disrespectUserMotionPreference: true})
    const apps = useSelector((state) => state.softwares)
    const appList = apps.map(app => {
        return (
            <div className='w-full flex flex-col items-center justify-center  rounded-lg p-3 m-2 ' key={app.name}>
                <img className="h-16" src={app.icon} alt={app.name} />
                {/* <p>{app.isOpen}</p> */}
                <h3 className='text-white py-1'>{(app.title).length > 8 ? (app.title).slice(0, 7) + "..." : app.title}</h3>
            </div>
        )
    })
    return (
        <>
        <div  ref={animationParent} className='absolute top-0 right-0 bg-black bg-opacity-50 h-[100vh] w-full'>
            <div className='h-[80vh] grid grid-rows-10 grid-cols-1 gap-3 mx-[25em] my-10 pt-10' >
                <div className='row-span-1 flex justify-center'>
                <FiSearch className='h-10 text-gray-400 text-xl relative left-9'/>
                    <input type="search" name="" id="" placeholder='Type to search' className='h-10 w-96 pl-12 rounded-full focus:ring-2 focus:ring-orange-700 focus:outline-none border-orange-700'/>
                </div>
                <div  className='allApps relative overflow-scroll mt-[1.5rem] row-span-2 row-span-8 h-[58vh]'>
                    <div className='grid grid-cols-6 ' >{appList}</div>
                </div>
                <div className='row-span-2 flex justify-evenly px-52 mt-8 text-white text-xl '>
                    <div className='min-w-48 min-h-10 text-center hover:border-b-4 border-r-orange-600'>Frequent</div>
                    <div className='min-w-48 min-h-10 text-center hover:border-b-4 border-r-orange-600'>All</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ListApps