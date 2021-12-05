import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from '../../videos/UTAC-Logo.png'
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  WebsiteRight,
  SocialIcon,
  SocialIconLink,
} from "./FooterElement";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FootMenu>
            <FootLinks> <Link to="/" style={{
                textDecoration: "none",
                color: "white"
              }}>
              <span >
              Home
              </span>
              </Link>
              </FootLinks>
              <FootLinks> <Link to="/" style={{
                textDecoration: "none",
                color: "white"
              }}>
              <span >
              About
              </span>
              </Link>
              </FootLinks>
              <FootLinks> <Link to="/" style={{
                textDecoration: "none",
                color: "white"
              }}>
              <span >
              Events
              </span>
              </Link>
              </FootLinks>
              <FootLinks> <Link to="/" style={{
                textDecoration: "none",
                color: "white"
              }}>
              <span >
              Contact
              </span>
              </Link>
              </FootLinks>
          </FootMenu>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialMediaLogo onClick={toggleHome}>
              <div style={{ textAlign: "center" }}>
                <div>
                  <img src={Logo} alt="logo" style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "30px",
                    margin: "0",
                  }} />
                </div>
                <div style={{ margin: "none", textAlign: "center" }}>
                  UMBRELLA FOR THE AFRICAN CHILD
                </div>
              </div>
            </SocialMediaLogo>

            <WebsiteRight
              target="blank"
            >
              Developed by <a href="https://samuel-kelechi.web.app/" target="blank">CodeLab</a> 🚀 | © {new Date().getFullYear()} All rights
              reserved{" "}
            </WebsiteRight>
            <SocialIcon>
              <SocialIconLink
                href="https://web.facebook.com/utac21"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </SocialIconLink>
              {/* 
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Youtube"
              >
                <YouTubeIcon />
              </SocialIconLink> */}

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <TwitterIcon />
              </SocialIconLink>

              {/* <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <LinkedInIcon />
              </SocialIconLink> */}

              <SocialIconLink href="https://www.instagram.com/_u.t.a.c/?hl=en" target="_blank" aria-label="Instagram">
                <InstagramIcon />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;


const FootMenu = styled.div`
 display: flex;
 width: 310px;
align-items: center;
height: 100%; 
cursor: pointer;
justify-content: space-between;
color : white;
margin-right:-100px;

@media screen and (max-width: 820px){
    margin-right: 0px;
  }

a{
  display: flex;
  align-items: center;
  height: 100%; 
  position: relative;
  color : white;

  span{
    font-weight: bold;
    /* text-transform: uppercase; */
    font-size: 15px;
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

const FootLinks = styled.div``