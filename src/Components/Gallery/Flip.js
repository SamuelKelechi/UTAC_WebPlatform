import React from 'react';
import styled from 'styled-components';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';



const slideImages = [
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/utacngo.appspot.com/o/1.jpg?alt=media&token=eb702e14-78c7-45b2-b760-5b4c24b146d6',
    // caption: 'Slide 1'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/utacngo.appspot.com/o/2.jpg?alt=media&token=54ccd2c4-5fa3-474f-9ae5-7a4eaf765e5f',
    // caption: 'Slide 2'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/utacngo.appspot.com/o/3.jpg?alt=media&token=68976cca-4967-40bd-85ed-83232f3024ae',
    // caption: 'Slide 3'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/utacngo.appspot.com/o/4.jpg?alt=media&token=d1a2f09b-8aca-457f-bbb3-7b448e1cfe57',
    // caption: 'Slide 4'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/utacngo.appspot.com/o/5.jpg?alt=media&token=ade1769b-0156-47c9-a223-575f44789a67',
    // caption: 'Slide 5'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/utacngo.appspot.com/o/6.jpg?alt=media&token=fa5a3c84-2f8f-4b86-9d31-be958545266c',
    // caption: 'Slide 6'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/utacngo.appspot.com/o/9.jpg?alt=media&token=cf26ac18-bac0-4793-8b04-0f48080f62c6',
    // caption: 'Slide 7'
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/utacngo.appspot.com/o/8.jpg?alt=media&token=909a7b61-a81c-4779-9346-6f1d3f37ddb3',
    // caption: 'Slide 8'
  },
];

const Flip = () => {
    return (
      <Container >
        <Fade style={{width: "100%", height:"100%"}}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index} style={{width: "100%", height:"500px"}}>
              <div style={{width: "100%", height:"450px", backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", objectFit:"cover", borderRadius: "8px", 'backgroundImage': `url(${slideImage.url})`}}>
                {/* <span>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Fade>
      </Container>
    )
}

export default Flip;

const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
flex-direction: column;
justify-content: center;
border-radius: 8px;
`