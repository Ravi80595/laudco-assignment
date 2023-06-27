import { Box,Text,Flex,Button} from '@chakra-ui/react'
import React from 'react'
import "../CustomCSS/HomePage.css"
import {BsTagsFill} from 'react-icons/bs'
import {FaRupeeSign,FaUserAlt} from 'react-icons/fa'
import {CiDiscount1} from 'react-icons/ci'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CreateNote from './CreateNote'
import AllNotes from "../Pages/AllNotes"
import { useEffect } from 'react'
import UsersPage from './UsersPage'
import { baseUrl } from '../Utils/BaseUrl'
import axios from 'axios'
import Description from '../Components/Description'


const Dashboard = () => {
  const [show,setShow]=useState("Users")
  const [usershow,setUserShow] = useState("")
  const navigate=useNavigate()
  const [profile,setProfile]=useState([])
  let r=`Bearer ${localStorage.getItem("token")}`



const getShow=()=>{
  if(r=="Bearer null"){
    setUserShow("show")
  }else{
    setUserShow("Hide")
  }
}
useEffect(()=>{
  getShow()
  getUser()
},[])

const getUser=()=>{
  console.log('user')
  axios.get(`${baseUrl}/user/userProfile`,{
    headers:{
      authorization:`Bearer ${localStorage.getItem("laudcoToken")}`
    }
  }).then((res)=>{
    console.log(res.data)
    setProfile(res.data)
  })
}


 {/* ..................  Logout method Here ........................ */}

 const handleLogout=()=>{
  const emptyToken="null"
  localStorage.setItem("laudcoToken",emptyToken)
  navigate("/login")
}

return (
    <Flex w='100%'>               
      <Box id='lhsBox' w={["5%","10%","16%"]} h='100vh' p='20px'>
            <Box h={[50,80,80,35]}>
              <Text>Hello {profile.name}</Text>
            </Box>
        <Box id='linkBox'>
          <hr />
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow("Users")}>
          <FaUserAlt className='lhsLogo'/>
          <Text pl='15px' className="lhsName">All Notes </Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(3)}>
          <FaRupeeSign className='lhsLogo'/>  
          <Text pl='15px' className="lhsName">Create Note</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(4)}>
          <CiDiscount1 className='lhsLogo'/>
          <Text pl='15px' className="lhsName">All Users</Text>
          </Flex>
          <hr />
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(2)}>
          <BsTagsFill className='lhsLogo'/>  
          <Text pl='15px' className="lhsName">Project Desc</Text>
          </Flex>
        </Box>
      </Box>
      <Box id='rhsBox' w='84%' ml='16%' h='auto'> 
        <Box id='navbarBox'  p='0px 40px'>
          <Flex justifyContent='space-between' pt={3} mb={3}>
            <Text fontWeight='bold'>Laudco Media</Text>
            <Button _hover={{bg:"rgb(134, 130, 238)",color:"white"}} onClick={handleLogout} mb={2} >Log Out</Button>
          </Flex>
        </Box>
      <Box id='rhsBody' m='30px' p='30px'>
        {
          show==="Users"?<AllNotes/>:show==3?<CreateNote/>:show==4?<UsersPage/>:<Description/>
        }
      </Box>
      </Box>
    </Flex>
  )
}

export default Dashboard