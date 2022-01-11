import { Box } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components';
const Title = styled.h1`
  font-size: 200px;
  position:absolute;
  top:-10%;
  left:5%;
  text-align: left;
  color: black;
  
`;
function slider() {
    return (
        <div>
            <Box height="100vh" width="100vw" backgroundColor="yellow">
               <Title> HE<br />LLO.</Title>
                <Box height="100vh" width="785.5px" backgroundColor="#F5A302" float="right" />
            </Box>
        </div>
    )
}

export default slider
