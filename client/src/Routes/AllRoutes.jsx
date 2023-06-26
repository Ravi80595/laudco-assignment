import React from 'react'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {

return (
<Routes> 
    <Route path="/" element={<Home/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
</Routes>
  )
}

export default AllRoutes
