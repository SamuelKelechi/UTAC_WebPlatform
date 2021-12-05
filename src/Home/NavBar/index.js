import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { FaBars, FaMagento } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {AiFillContacts} from "react-icons/ai"
import {AiFillCalendar} from "react-icons/ai"
import {AiFillProfile} from "react-icons/ai"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  // NavMenu,
  // NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBar.element";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom"

import Logo from "../videos/UTAC-Logo.png";



const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {/* <FaMagento style={{ marginRight: "10px" }} /> */}
            <img src={Logo} alt="Logo" style={{
              width: "60px",
              height: "60px",
              borderRadius: "30px"
            }} />
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
         
              <NavLinks> <Link to="/" style={{
                textDecoration: "none",
                color: "white"
              }}>
              <AiFillHome style={{marginRight:"2px", marginTop:"-5px"}}/>
              <span >
              Home
              </span>
              </Link>
              </NavLinks>
          

           
              <NavLinks >
              <Link to="/about" >
              <AiFillProfile style={{marginRight:"2px", marginTop:"-4px"}}/>
              <span>
              About
              </span>

              </Link></NavLinks>
           

            
              <NavLinks><Link to="/event" style={{
                textDecoration: "none",
                color: "white"
              }}>
              <AiFillCalendar style={{marginRight:"2px", marginTop:"-5px"}}/>
              <span>
              Events
              </span>
              
              </Link></NavLinks>
          

         
              <NavLinks><Link to="/contact" style={{
                textDecoration: "none",
                color: "white"
              }}>
              <AiFillContacts style={{marginRight:"2px", marginTop:"-5px", fontSize:"20px"}} />
              <span>
              Contact
              </span>
              </Link></NavLinks>
           
         
          </NavMenu>
          
          <NavBtn>
            <NavBtnLink to="/">Donate</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;



const NavMenu = styled.div`
 display: flex;
align-items: center;
height: 100%; 
cursor: pointer;
/* margin-left: 20px; */
justify-content: center;
color : white;

@media screen and (max-width: 768px){
    display: none;
  }

a{
  display: flex;
  align-items: center;
  height: 100%; 
  position: relative;
  margin-left: 20px;
  color : white;

  /* img{
    width: 20px;
    height: 20px;
    object-fit: cover;
    
  } */

  span{
    font-weight: bold;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1.1px;
    position: relative;
    opacity: 0.7;

    /* #0E3BF2; */
    &:after{
      content:"";
      position: absolute;
      height: 2px;
      background-color: whitesmoke;
      right: 0;
      left: 20px;
      bottom: 20px;
      opacity: 0;
      transform: scaleX(1);
      transform-origin: center left;
      transition: all 350ms cubic-bezier(0.34, 0.44, 0.96, 0.47) 0s;
    }
  }

  &:hover{
    span{
      opacity: 1;
    }
    span:after {
      opacity: 1;
      transform: scaleX(1.06)
    }
  }

  
}`