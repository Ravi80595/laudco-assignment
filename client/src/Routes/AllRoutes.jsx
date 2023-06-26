import React from 'react'
import HomePage from '../Pages/HomePage'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {

return (
<Routes> 
    <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
</Routes>
  )
}

export default AllRoutes
