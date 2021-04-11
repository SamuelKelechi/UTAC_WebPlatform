import React, { useState, useEffect } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
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
            <NavItem>
              <NavLinks> <Link to="/" style={{
                textDecoration: "none",
                color: "white"
              }}>Home</Link></NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks ><Link to="/about" style={{
                textDecoration: "none",
                color: "white"
              }}>About</Link></NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks><Link to="/event" style={{
                textDecoration: "none",
                color: "white"
              }}>Events</Link></NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks><Link to="/contact" style={{
                textDecoration: "none",
                color: "white"
              }}>Contact Us</Link></NavLinks>
            </NavItem>
          </NavMenu>
          {/* 
          <NavBtn>
            <NavBtnLink to="/signin">Sign-In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
