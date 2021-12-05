import React from "react";
import bg from "../videos/community.jpeg";

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
            height: "220px"
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
          dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.
        </p>
        <h2>500+ Kids Reached</h2>
        <p>
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
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
