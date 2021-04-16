import React from "react";
import Capture from "../Home/Capture";
import FeatureCard from "../Home/FeatureCard";
import HomeStart from "../Home/HomeStart";
import Love from "../Home/Love";
import MapHolder from "../Home/MapHolder";
import Partner from "../Home/Partner";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import love from "../videos/love.svg";
import ttt from "../videos/ttt.png";
import Story from "../Home/Story";
import SuccessStory from "../Home/SuccessStory";
import Total from "../Home/Total";
import Trusted from "./TrustedBy";
import NavBar from "../NavBar/index"
import SideBar from "../SideBar/SideBar"
import NewsFlash from "../../Event/NewsFlash"





const HomeScreen = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <center>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <HomeStart />
        <Partner />
        <Capture />
        <FeatureCard />
        <Love text="Our Community" bg="#FAB43F" img={love} />
        <MapHolder />
        <Love text="Meet Our Founder" bg="#3863DF" img={love} bg1="#F4F6FC" />
        <Story />
        <Total />
        <SuccessStory />
        <NewsFlash />
        <Footer />
      </center>
    </div>
  );
};

export default HomeScreen;
