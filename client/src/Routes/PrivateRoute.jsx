import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

if(
    localStorage.getItem("laudcoToken") == "r" ||
    localStorage.getItem("laudcoToken") == null ||
    localStorage.getItem("laudcoToken") == 'null'
){
    return <Navigate to="/login"/>
}
    return children
}

export default PrivateRoute
