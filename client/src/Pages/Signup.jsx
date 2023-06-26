import { Box,Flex,HStack,FormControl,FormLabel,Input,Button,Text,Image,Heading,InputGroup,InputRightElement } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {baseUrl} from "../Utils/BaseUrl"

const Signup = () => {
    const initObj={
        name:"",
        password:"",
        phone:"",
        email:"",
        age:"",
    }
    const navigate=useNavigate()
    const [values,setValues]=useState(initObj)
    const [show,setShow]=useState(false)
    
    const handleClick = () => setShow(!show);
   
    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

const handleSubmit=()=>{
        const payload={
            name:values.name,
            email:values.email,
            password:values.password,
            age:values.age,
            phone:values.phone
        };
        console.log(payload)
if(payload.email=="" || payload.password=="" || payload.name==""){
        alert("Please fill All Madentory fields")
  }else{
axios.post(`${baseUrl}/user/register`,payload)
.then((res)=>{
    console.log("Signup Success",res)
    localStorage.setItem('velvetId',JSON.stringify(res.data))
    alert("Signup Success")
    navigate("/login")
})
.catch((err)=>{
    console.log(err)
    alert(err.response.data)
})
}
}

  return (
    <>
    {/* <Navbar/> */}
    <Box w="100%" boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' overflow="hidden" position='fixed' backgroundColor="white">
    </Box>
    <Box width={["90%","90%","30%"]} m="auto" pb={20}>
            <Box p={5} mt={10}  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                <FormControl isRequired>
                    {/* <HStack> */}
                        <Box>
                        <FormLabel isRequired>Name</FormLabel>
                        <Input type="text" name='name' onChange={handleChange}/>
                        </Box>
                        <Box>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name='email' onChange={handleChange}/>
                        </Box>
                    {/* </HStack> */}
                    <FormLabel>Age</FormLabel>
                        <Input type="text" name='age' onChange={handleChange}/>
                        <FormLabel>Phone</FormLabel>
                        <Input type="text" name='phone' onChange={handleChange}/>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          name="password"
                          onChange={handleChange}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                   </InputGroup>
                        <Button mt={2} width="100%" onClick={handleSubmit}>Signup</Button>
                        <Text textAlign="center">OR</Text>
                        <Link to="/login">
                        <Button mt={2} width="100%">Login</Button>
                        </Link>
                </FormControl>
            </Box>
        {/* </Flex> */}
    </Box>
    </>
  )
}

export default Signup