import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'


function ProtectedRoutes({ children }) {
    try {
        const navigate = useNavigate()
        const authStatus = useSelector(state => state.auth.status)
        // useEffect(() => {
        //     if (!authStatus) {
        //         navigate('/login');
        //     }
        // }, [authStatus, navigate]);
        return authStatus ? <div>{children}</div> : <Navigate to='/login' />
    }
    catch (err) {
        return (<Navigate to='/login' />)
    }
}

export default ProtectedRoutes