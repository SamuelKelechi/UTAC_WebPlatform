import React from 'react'
import {GiFastForwardButton} from 'react-icons/gi'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function StoryVid() {
    return (
        <Container>
        <GalleryWrapper>

            <FlipHolder>
                <video style={{borderRadius:"8px"}} width="100%" height="280" source src="https://firebasestorage.googleapis.com/v0/b/utacngo.appspot.com/o/Donating%20to%20the%20causes%20you%20care%20about%20not%20only%20benefit%20the%20charities%20themselves%2C%20it%20can%20be%20deeply%20rewarding%20for%20you%20too.%20%E2%80%9CGive%20Today.%20Give%20Tomorrow.%20Give%20Always%E2%80%9D%23UnionRiseChallenge%20%40unionbankng.mp4?alt=media&token=490fab62-fc5d-4327-bfcf-85e42987cd14" controls autoplay muted/>
            </FlipHolder>
            <TextHolder>
                Every classroom has four or more students who do not eat regular meal at home
            </TextHolder>
            
        </GalleryWrapper>
    </Container>
    )
}

export default StoryVid


const Container = styled.div`
width: 100%;
padding: 10px;
display: flex;
justify-content:center;
align-items: center;
/* background-color: #F4F4F4; */
background-color: whitesmoke;
margin-top: 35px;
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
height: 350px;
/* background-color:green; */
width: 400px;
margin: 5px;
font-size: 35px;
display: flex;
flex-direction: column;
justify-content: center;
font-weight: bolder;

@media screen and (max-width: 450px){
    width: 100%;
    font-size: 20px;
    height: 200px;
}
`
const FlipHolder = styled.div`
height: 350px;
width: 500px;
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
border-radius: 8px;
@media screen and (max-width: 700px){
    width: 95%;
}
`
