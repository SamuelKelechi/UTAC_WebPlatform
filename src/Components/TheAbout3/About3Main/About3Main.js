import React from 'react'
import About3Card from '../About3Card/About3Card'
import './About3Main.css'
import Pox from '../../Img/timg (1).png'
import Pox1 from '../../Img/timg (3).png'
import Pox2 from '../../Img/timg (5).png'

function About3Main() {
  return (
    <div className='About3MainGeneralDiv'>
      <div className='About3MainSubGeneralDiv'>
        <div className='topic'>3C's: Our Model</div>
        <div className='CardHold'>
          <About3Card
            CardImage={Pox}
            Letter='A'
            Title='Samuel'
            Content='Vital conversations, safe spaces, inspiration, and fun'
          />
          <About3Card
            CardImage={Pox1}
            Letter='B'
            Title='Gideon'
            Content='Vital conversations, safe spaces, inspiration, and fun'
          />
          <About3Card
            CardImage={Pox2}
            Letter='C'
            Title='LakeCombes'
            Content='Vital conversations, safe spaces, inspiration, and fun'
          />
        </div>
      </div>
    </div>
  )
}

export default About3Main
