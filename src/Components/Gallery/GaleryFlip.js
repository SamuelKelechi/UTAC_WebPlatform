import React from "react";
import styled from 'styled-components'
import Flip from './Flip'
import {GiFastForwardButton} from 'react-icons/gi'
import Button from '@mui/material/Button';


const GalleryFlip = () => {

  return (
    <Container>
        <GalleryWrapper>
            <TextHolder>
                Explore Our Event Gallery and see what is new
                <Button variant="outlined" size="large" style={{height:"50px"}}><GiFastForwardButton /></Button>
            </TextHolder>
            <FlipHolder>
                <Flip />
            </FlipHolder>
        </GalleryWrapper>
    </Container>
  );
};

export default GalleryFlip;

const Container = styled.div`
width: 100%;
padding: 10px;
display: flex;
justify-content:center;
align-items: center;
`
const GalleryWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 80%;
align-items: center;

@media screen and (max-width: 1200px){
    justify-content: center;
}
@media screen and (max-width: 450px){
    width: 95%;
}
`
const TextHolder = styled.div`
height: 450px;
/* background-color:green; */
width: 400px;
margin: 5px;
font-size: 50px;
display: flex;
flex-direction: column;
justify-content: center;
font-weight: bolder;

@media screen and (max-width: 450px){
    width: 100%;
    font-size: 35px;
    height: 300px;
}
`
const FlipHolder = styled.div`
height: 450px;
width: 500px;
margin: 5px;
position: relative;
background-color: blue;
border-radius: 8px;
@media screen and (max-width: 700px){
    width: 100%;
}
`