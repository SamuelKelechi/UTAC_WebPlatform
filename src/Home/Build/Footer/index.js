import React from "react";
import { Link } from 'react-router-dom'


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
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
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
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle> <Link to="/" style={{
                textDecoration: "none",
                fontWeight: "bolder",
                color: "white",
                fontSize: "20px"
              }}>Home</Link> </FooterLinkTitle>
              {/* <FooterLink to="/signin">How it work</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink> */}
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle> <Link to="/event" style={{
                textDecoration: "none",
                fontWeight: "bolder",
                color: "white",
                fontSize: "20px"
              }}>Events</Link> </FooterLinkTitle>
              {/* <FooterLink to="/signin">How it work</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink> */}
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle> <Link to="/about" style={{
                textDecoration: "none",
                fontWeight: "bolder",
                color: "white",
                fontSize: "20px"
              }}>About</Link></FooterLinkTitle>
              {/* <FooterLink to="/signin">How it work</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink> */}
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle> <Link to="/contact" style={{
                textDecoration: "none",
                fontWeight: "bolder",
                color: "white",
                fontSize: "20px"
              }}>Contact</Link></FooterLinkTitle>
              {/* <FooterLink to="/signin">How it work</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Career</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink> */}
            </FooterLinksItems>
          </FooterLinksWrapper>
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
              target="new page"
            >
              Developed by CodeLab 🚀 | © {new Date().getFullYear()} All rights
              reserved{" "}
            </WebsiteRight>
            <SocialIcon>
              <SocialIconLink
                href="https://web.facebook.com/lotscharityfoundation"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </SocialIconLink>
              {/* 
              <SocialIconLink
                href="https://www.youtube.com/channel/UCjHVNjp4cfxBfKRbbtUUYAg"
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

              <SocialIconLink href="https://www.instagram.com/lotscharityfoundation0/" target="_blank" aria-label="Instagram">
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
