import React from 'react'
import styled from 'styled-components';
import { Box, Button } from '@chakra-ui/react'
const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: black;
  
`;
const Boxf = styled.div`
  background-color: black;
  width: 400px;
  height:300px;
  margin: 15px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
`;
function portfolio() {
    return (
        <div>
              <Box backgroundColor="" height="100vh" width="100wh" position="relative">
                    <Title>Portfolio</Title>
                    <Box display="flex" flex-wrap="nowrap" justifyContent="center">
                        <Boxf>1</Boxf>
                        <Boxf></Boxf>
                        <Boxf></Boxf>
                        
                    </Box>
                    <Box display="flex" flex-wrap="nowrap" justifyContent="center">
                        <Boxf>1</Boxf>
                        <Boxf></Boxf>
                        <Boxf></Boxf>
                        
                    </Box>
              </Box>
        </div>
    )
}

export default portfolio
