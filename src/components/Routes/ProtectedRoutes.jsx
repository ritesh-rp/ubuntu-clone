import { Navigate } from 'react-router-dom'
import React, {useContext} from 'react'
import { authUserContext } from '../../App'


function ProtectedRoutes({ children }) {
    const {loggedInUser, setLoggedInUser} = useContext(authUserContext)
    console.log("userSession of protected routes ...........",loggedInUser)
    return loggedInUser ? <div>{children}</div> : <Navigate to='/login' />
}

export default ProtectedRoutes