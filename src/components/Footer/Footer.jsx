import { useNavigate } from 'react-router-dom';
import React from "react";
import { useSelector } from "react-redux";
import Login from "../Login";
import { Navigate } from "react-router-dom";
import ListApps from "../ListApps";
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function Footer() {
    // const authUser = useSelector((state) => state.auth.status)
    const authUser = sessionStorage.getItem("userData")
    const [toggleAllApps, setToggleAllApps] = useState(true)
    const [parentAnimate] = useAutoAnimate()

    const navigate = useNavigate()


    return authUser ?
        <footer className=" w-full h-11 shadow bg-opacity-45 bg-black fixed bottom-0 flex items-center justify-between">
            <div className="flex items-center justify-between px-2">
                <div className="p-2 rounded-md hover:bg-zinc-700">
                    <img src="https://i.postimg.cc/5ttGtd1v/images-removebg-preview.png" className="h-7" alt="na" />
                </div>
                <div className="p-2 rounded-md hover:bg-zinc-700">
                    <img src="https://i.postimg.cc/C520yrLW/pngegg.png" className="h-7" alt="na" />
                </div>
            </div>
            <div>
                <div ref={parentAnimate} className="p-2 rounded-md hover:bg-zinc-700 mx-2" onClick={() => {
                    setToggleAllApps(!toggleAllApps);
                    navigate(toggleAllApps ? '/listapps' : '/');

                }}>
                    <img src="https://i.postimg.cc/7LsMvj2H/GO5ql-Aw-Xne1z8-Fm-T0vr-L-transformed.png" className="h-7" alt="na" />
                </div>
            </div>

        </footer>
        :
        null
}

export default Footer;