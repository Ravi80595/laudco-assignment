import React from 'react'
import { Box,Flex,Text,Image } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../Utils/BaseUrl'

const User = () => {
    const [adminProfile,setAdminProfile]=useState("")

    
// ........................... Admin Profile Method here ........................

  const getProfile=()=>{
    axios.get(`${baseUrl}/user/details`,{
      headers:{
        authorization:`Bearer ${localStorage.getItem("laudcoToken")}`
      }
    })
    .then((res)=>{
      console.log(res.data)
        setAdminProfile(res.data.Data)
    })
    .catch(function (err){
      console.log(err)
    })
  }

  useEffect(()=>{
   getProfile()
  },[])


  return (
    <Box h={10} border='2px solid red' mb={2}>
    <Link to="/userprofile">
      {
        adminProfile && adminProfile.map((data)=>{
          return(
            <Flex id='titleBox'  p='0px 10px' mb='40px' key={data._id}>
            <Image src={data.avtar} w='45px' borderRadius='50%'/>
            <Box>
            <Text pl={[0,0,5]} fontWeight='bold'>{data.firstname}</Text>
            <Text pl={[0,0,5]} >{data.role}</Text>
            </Box>
            </Flex>
          )
        })
      }
      </Link>
      </Box>
  )
}

export default User