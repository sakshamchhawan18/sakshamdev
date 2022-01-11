import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import styled from 'styled-components';
import Bounce from 'react-reveal';
import  Fade  from 'react-reveal';
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai";


const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: black;
`;
const Para = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
const Head = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color:#F5A302;
`;
function aboutus() {
    return (
        <div>
        <Box backgroundColor="" height="100vh" width="100wh" position="relative">
        <Fade up> <Title> About</Title> 
         <Box borderRadius="50%" height="200px" width="200px" backgroundColor="#F5A302" paddingLeft="20px" position="relative" left="43%" ></Box>
        
           <Head> I'am Saksham Chhawan a web dev</Head>
           </Fade>
           <Bounce up>
            <Para>Highly eperienced in web design <br />and development knowladge, produing <br />quality work</Para>
            <Box position="relative" left="40%" justifyContent="space-around">
            <AiFillTwitterCircle size="30px" color='#00ACEE'/>
            <BsFacebook size="30px" color='#3B5998' />
            <FaLinkedin size="30px" color='#0E76A8' />
            <AiFillInstagram size="30px" colour='#8a3ab9'/>
            </Box>
            </Bounce>
                <Box height="80px" width="550px" backgroundColor="red" position="relative" left="35%" top="3%" overflow="hidden" >
                    <Box height="80px" width="80px" borderRadius="50%" backgroundColor="#F5A302"></Box>
                    <Box height="80px" width="80px" borderRadius="50%" backgroundColor="#F5A302"></Box>
                    <Box height="80px" width="80px" borderRadius="50%" backgroundColor="#F5A302"></Box>
                </Box>
            
            
            </Box>  


        </div>
    )
}

export default aboutus
