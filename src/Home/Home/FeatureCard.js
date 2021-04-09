import React from "react";
import CardProps from "./CardProps";
import checkmark from "../videos/checkmark.svg";
import hands from "../videos/hands.svg";
import data from "../videos/data.svg";
import global from "../videos/global.svg";

const FeatureCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#F3F5FB",
      }}
    >
      <CardProps
        header="Our Story"
        detail="We caters to the physiological [feeding, clothing and shelter], social, educational, psychological, medical, and emotional needs of street kids and vulnerable children."
        img={checkmark}
        bg="#F9AF2F"
      />

      <CardProps
        header="Our Location"
        detail="Our area of focus now in Ajeromi-ifelodun local government in a community called ‘DUSTBIN ESTATE’ in Ajegunle, Lagos state."
        img={global}
        bg="#3863DF"
      />

      <CardProps
        header="Purpose-Driven Location"
        detail="‘DUSTBIN ESTATE’ as it ‘s name connotes, is an area of refuse; a settlement in which its inhabitants build their house with planks on refuse dumps."
        img={data}
        bg="#49AAAF"
      />

      <CardProps
        header="Dedicated Team"
        detail="We have a very dedicated team working round the clock with us. Our staffs and volunteers are passionate about what we do here at LOTS Foundation."
        img={hands}
        bg="#1F2C46"
      />
    </div>
  );
};

export default FeatureCard;
