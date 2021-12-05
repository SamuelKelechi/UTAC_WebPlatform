import React from "react";
// import TransitionsModal from "../ModalComponents/Modal";
import { Link } from 'react-router-dom'

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle}>
              <Link to="/" style={{
                textDecoration: "none",
                color: "white"
              }}>Home</Link>
            </SidebarLink>

            <SidebarLink onClick={toggle}>
              <Link to="/about" style={{
                textDecoration: "none",
                color: "white"
              }}>About</Link>
            </SidebarLink>

            <SidebarLink onClick={toggle}>
              <Link to="/event" style={{
                textDecoration: "none",
                color: "white"
              }}>Event</Link>
            </SidebarLink>

            <SidebarLink onClick={toggle}>
              <Link to="/contact" style={{
                textDecoration: "none",
                color: "white"
              }}>Contact</Link>
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap></SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default SideBar;
