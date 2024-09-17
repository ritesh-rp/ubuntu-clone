import React from 'react'
import authSlice from '../store/authSlice'
import { useSelector } from 'react-redux'


function ProtectedRoute() {
//    const authStatus = useSelector(state=>state.)
   const authUser = useSelector(state => state.auth.status)

  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute