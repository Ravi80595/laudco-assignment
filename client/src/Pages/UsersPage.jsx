import React, { useEffect, useState } from 'react'
import { Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Spinner,Image,Flex,Text,Input,Select } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../Utils/BaseUrl'

const UsersPage = () => {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const token = JSON.parse(localStorage.getItem("socialPshcyoToken"))


useEffect(()=>{
  setLoading(true)
  axios.get(`${baseUrl}/user/allusers`)
  .then((res)=>{
    console.log(res.data)
    setUsers(res.data)
    setLoading(false)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])


const handleChange = (e) => {
axios.get(`${baseUrl}/user/search/${e.target.value}`,{
}).then((res)=>{
console.log(res)
setUsers(res.data)
})
.catch((err)=>{
console.log(err)
})
}

const handleAgeChange = (e) => {
  axios.get(`${baseUrl}/user/searchAge/${e.target.value}`,{
  }).then((res)=>{
  console.log(res)
  setUsers(res.data)
  })
  .catch((err)=>{
  console.log(err)
  })
}

const handleEmailChange = (e) => {
    axios.get(`${baseUrl}/user/searchEmail/${e.target.value}`,{
    }).then((res)=>{
    console.log(res)
    setUsers(res.data)
    })
    .catch((err)=>{
    console.log(err)
    })
}

const handlePhoneChange = (e) => {
  axios.get(`${baseUrl}/user/searchPhone/${e.target.value}`,{
  }).then((res)=>{
  console.log(res)
  setUsers(res.data)
  })
  .catch((err)=>{
  console.log(err)
  })
}


// const handleNavigate=(ele)=>{
//   navigate(`/single/${ele._id}`)
// }

if(loading){
return <Spinner textAlign='center' mt={50} ml={50} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}



return (
    <Box>
      <Flex justifyContent="space-between">
        <Text w={["30%","30%","30%","15%"]} fontSize={["10px","10px","10px","20px"]}>Total Users : {users.length}</Text>
        <Input fontSize={["10px","10px","10px","20px"]} onInput={handleChange} w={["30%","30%","30%","60%"]} placeholder="search user by name"/>
        <Text w={["30%","30%","30%","15%"]} fontSize={["10px","10px","10px","20px"]}>*******</Text>
      </Flex>
      <Flex mb={10}mt={10} justifyContent="space-between">
      <Input fontSize={["10px","10px","10px","20px"]} onInput={handleAgeChange} w={["30%","30%","30%","30%"]} placeholder="search by age"/>
      <Input fontSize={["10px","10px","10px","20px"]} onInput={handleEmailChange} w={["30%","30%","30%","30%"]} placeholder="search by email"/>
      <Input fontSize={["10px","10px","10px","20px"]} onInput={handlePhoneChange} w={["30%","30%","30%","30%"]} placeholder="search by phone"/>
      </Flex>
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr textAlign='center'>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Age</Th>
                  <Th>Phone No.</Th>
                </Tr>
              </Thead>
              <Tbody>
      {
        users && users.map(ele=>(
                <Tr cursor="pointer" _hover={{backgroundColor:"#f3f4f6"}}>
                  <Td><Image w={50} src={`https://cdn.vectorstock.com/i/preview-1x/11/69/blank-avatar-profile-picture-vector-45161169.jpg`}/></Td>
                  <Td>{ele.name}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.age} yrs</Td>
                  <Td>{ele.phone}</Td>
                </Tr>
                ))
              }
              </Tbody>
            </Table>
          </TableContainer>
    </Box>
  )
}

export default UsersPage
