import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
  {
    url: 'images/8.jpg',
    // caption: 'Slide 1'
  },
  {
    url: 'images/1.jpg',
    // caption: 'Slide 2'
  },
  {
    url: 'images/2.jpg',
    // caption: 'Slide 3'
  },
  {
    url: 'images/3.jpg',
    // caption: 'Slide 4'
  },
  {
    url: 'images/4.jpg',
    // caption: 'Slide 5'
  },
  {
    url: 'images/5.jpg',
    // caption: 'Slide 6'
  },
  {
    url: 'images/6.jpg',
    // caption: 'Slide 7'
  },
  {
    url: 'images/9.jpg',
    // caption: 'Slide 7'
  },
];

const Flip = () => {
    return (
      <Container >
        <Slide style={{width: "100%", height:"100%"}}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index} style={{width: "100%", height:"500px"}}>
              <div style={{width: "100%", height:"450px", backgroundPosition:"center", backgroundRepeat:"no-repeat", objectFit:"cover", borderRadius: "8px", 'backgroundImage': `url(${slideImage.url})`}}>
                {/* <span>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </Container>
    )
}

export default Flip;

const Container = styled.div`
height: 100%;
width: 100%;
background-color: red;
display:flex;
flex-direction: column;
justify-content: center;
border-radius: 8px;
`