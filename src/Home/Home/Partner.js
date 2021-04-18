import React from "react";
// import apple from "../videos/apple.png";
// import bbc from "../videos/bbc.png";
// import fc from "../videos/fc.png";
import Partner2 from "../videos/Partner2.png";
import bd from "../videos/bd.png";
import mc from "../videos/DFTS_Logo.png";
import Partner1 from "../videos/Partner1.png";

const Partner = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
        marginTop: "10px"
      }}
    >
      <div
        style={{
          width: "110px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          color: "#F9AF2F",
          textTransform: "uppercase",
          // backgroundColor: "red",
        }}
      >
        Trusted by
      </div>
      <div>
        <img
          src={bd}
          alt="Partners"
          style={{
            width: "110px",
            height: "80px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>

      <div>
        <img
          src={mc}
          alt="Partners"
          style={{
            width: "200px",
            height: "80px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>

      <div>
        <img
          src={Partner1}
          alt="Partners"
          style={{
            width: "200px",
            height: "80px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>

      <div>
        <img
          src={Partner2}
          alt="Partners"
          style={{
            width: "200px",
            height: "80px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>



      {/* <div>
        <img
          src={fc}
          alt="Partners"
          style={{
            width: "200px",
            height: "80px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div> */}

      {/* <div>
        <img
          src={bbc}
          alt="Partners"
          style={{
            width: "200px",
            height: "60px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div> */}

      {/* <div>
        <img
          src={apple}
          alt="Partners"
          style={{
            width: "200px",
            height: "80px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div> */}
    </div>
  );
};

export default Partner;
