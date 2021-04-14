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
        header="Who We Are"
        detail="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        img={checkmark}
        bg="#F9AF2F"
      />

      <CardProps
        header="What We Do"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
        img={global}
        bg="#3863DF"
      />

      <CardProps
        header="How We Work"
        detail="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque"
        img={data}
        bg="#49AAAF"
      />

      <CardProps
        header="Our Team"
        detail="aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam"
        img={hands}
        bg="#1F2C46"
      />
    </div>
  );
};

export default FeatureCard;
