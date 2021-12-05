import { ButtonBase } from "@material-ui/core";
import { Button } from "antd";
import React from "react";
import { Link } from 'react-router-dom'

const SuccessStory = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "20px",
        marginBottom: "20px ",
      }}
    >


      <div
        style={{
          width: "300px",
          marginLeft: "10px",
          // height: "150px",
          textAlign: "left",
          border: "1px solid lightblue",
          padding: "20px 10px",
          margin: "5px",
          boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        }}
      >
        <div>
          My association with UTAC started years ago when it started
          as Umbrella Ghana and I've watched it grow stronger ever since.
          Apart from the passionate and enthusiastic volunteer base it
          has the true essence of selflessness reflects in the activities
          acting as an enabler for creating a better society, and a better
          tomorrow. Right from working for underprivileged, or simple
          acts of kindness like spending quality time with the terminally
          ill or elderly, and to see their faces light up with smiles.
        </div>
        <div
          style={{
            backgroundColor: "#5BB3B7",
            width: "50px",
            height: "5px",
            marginTop: "20px ",
          }}
        >
        </div>
        <h2
          style={{
            margin: "0",
          }}
        >
          Ukavwe Egwolo Joan
        </h2>

      </div>



      <div
        style={{
          width: "300px",
          marginLeft: "10px",
          // height: "150px",
          textAlign: "left",
          border: "1px solid lightblue",
          padding: "20px 10px",
          margin: "5px",
          boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        }}
      >
        <div>
          UTAC is one of the Best youth Organization in Africa and for me in
          Nigeria 🇳🇬. The founder Samuel kwame Mensah is very humble and
          leads by example. My organization have partnered with UTAC and
          anytime we embark on a projects it’s a thing of joy knowing God’s
          love will be felt. As the founder of Magho foundation, I will say
          I am proud to be a part of UTAC projects.
        </div>
        <br />
        <br />
        <div
          style={{
            backgroundColor: "#5BB3B7",
            width: "50px",
            height: "5px",
            marginTop: "20px ",
          }}
        >
        </div>
        <h2
          style={{
            margin: "0",
          }}
        >
          William Apau (FOUNDER, MAGHO FOUNDATION)
        </h2>
        <Link to="/testimony">
          <Button style={{
            backgroundColor: "#5BB3B7",
            color: "white"
          }}>
            Read More..
        </Button>
        </Link>
      </div>



    </div>
  );
};

export default SuccessStory;
