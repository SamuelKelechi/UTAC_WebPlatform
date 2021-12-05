import React from 'react'
import NavBar from "../../Home/NavBar/index"
import SideBar from "../../Home/SideBar/SideBar"
import Footer from "../../Home/Build/Footer/index"

import HeroAbout from '../HeroAbout/HeroAbout'
import TheAbout1 from '../TheAbout1/TheAbout1'
import TheAbout2 from '../TheAbout2/TheAbout2'
// import About3Card from '../TheAbout3/About3Card/About3Card'
import About3Main from '../TheAbout3/About3Main/About3Main'

function AboutPage() {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <div>

        <HeroAbout />
        <TheAbout1 />
        {/* <TheAbout2 />
      <About3Main /> */}
        <Footer />
      </div>
    </>
  )
}

export default AboutPage
