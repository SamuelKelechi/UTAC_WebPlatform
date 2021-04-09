import React from "react";
import bg from "../videos/Founder.png";

const MapHolder = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          // backgroundColor: "red",
          width: "300px",
        }}
      >
        <img
          src={bg}
          alt="bg"
          style={{
            width: "100%",
            objectFit: "contain",
            // marginTop: "50px",
            height: "280px"
          }}
        />
      </div>
      <div
        style={{
          // backgroundColor: "red",
          width: "300px",
          textAlign: "left",
          marginLeft: "10px",
        }}
      >
        <h2>10+ Staffs/Volunteers</h2>
        <p>
          With our dedicated workers and volunteers, the kids receive every care and training they need.
        </p>
        <h2>500+ Kids in the Community</h2>
        <p>
          Over five hundred children residing in the Community with most of them not having access to some of their basic needs.
        </p>
        {/* <h2>60+ Countries</h2>
        <p>
          With a geographic footprint that covers Africa, South America, Eastern
          Europe, and many more.
        </p> */}
      </div>
    </div>
  );
};

export default MapHolder;
