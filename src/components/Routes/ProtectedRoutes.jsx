import { Navigate } from 'react-router-dom'
import React from 'react'



function ProtectedRoutes({ children }) {
    try{
        // const authStatus = useSelector(state => state.auth.status)
        const authStatus = sessionStorage.getItem("userData")
        console.log("authStatus protected......", authStatus)
        console.log("authStatus....",authStatus)
        return authStatus ? <div>{children}</div>: <Navigate to='/login'/>
    }
    catch(err){
        return ( <Navigate to='/login'/>)
    }
}

export default ProtectedRoutes