import React from "react"
import { Navigate, Outlet} from "react-router-dom"


const Protectedroute = ({isAuthenticated, children}) => {
    if(!isAuthenticated){
        return <Navigate to="/login" />
    }
    return <Outlet/>
}

export default Protectedroute