import React from 'react'
import './About3Card.css'
// import Pox from '../../Img/timg (1).png'

function About3Card(props) {
  return (
    <div className='About3CardGeneralDiv'>
      <img src={props.CardImage} alt='' style={{ height: '211px', width: '280px', objectFit: 'cover' }} />
      <div className='About3CardSubGeneralDiv'>
        <div className='CircleDiv'>{props.Letter}</div>
        <div className='Curiculm'>{props.Title}</div>
        <div className='cont' > {props.Content} </div>
      </div>
    </div>
  )
}

export default About3Card
