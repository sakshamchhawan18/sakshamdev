import React from 'react'
import styled from 'styled-components';
import { Box, Button } from '@chakra-ui/react'
const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: black;
  
`;
const Head = styled.h1`
  font-size: 2.5em;
  text-align: Left;
  position:relative;
  left:10%;
  color:#F5A302;
`;
function skills() {
    return (
        <div>
         <Box backgroundColor="" height="100vh" width="100vw" position="relative" border="2px solid black">
         <Title>Skills</Title>
            <Head>Development</Head>
            <Box display="flex" justifyContent="space-around" padding="30px">
                <Button>Html</Button><Button>Html</Button><Button>Html</Button><br /><Button>Html</Button><Button>Html</Button>
            </Box>
            
            <Head>Design</Head>
            <Box display="flex" justifyContent="space-around" padding="30px">
                <Button>Html</Button><Button>Html</Button><Button>Html</Button><br /><Button>Html</Button><Button>Html</Button>
            </Box>
            </Box>
        </div>
    )
}

export default skills
