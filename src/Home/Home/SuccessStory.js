import React from "react";
import { Link } from 'react-router-dom'

const SuccessStory = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "40px",
        marginBottom: "20px ",
      }}
    >
      <div
        style={{
          width: "300px",
          marginLeft: "10px",
          height: "150px",
          textAlign: "left",
          border: "1px solid lightblue",
          padding: "20px 10px",
          margin: "5px"
        }}
      >
        <h2
          style={{
            margin: "0",
          }}
        >
          PILOT PROJECT ON ADVOCATING
        </h2>
        <div
          style={{
            backgroundColor: "#5BB3B7",
            width: "50px",
            height: "5px",
            marginBottom: "20px ",
          }}
        >
          {" "}
        </div>
        <Link to="/event" style={{
          textDecoration: "none",
          color: "rgb(16,21,34)",
          cursor: "pointer",
        }}>
          <div>
            We are happy to announce a 6 months pilot project on Advocating the implementation of Community...
        </div>
        </Link>
      </div>



      <div
        style={{
          width: "300px",
          marginLeft: "10px",
          height: "150px",
          textAlign: "left",
          border: "1px solid lightblue",
          padding: "20px 10px",
          margin: "5px"
        }}
      >
        <h2
          style={{
            margin: "0",
          }}
        >
          FIRST SESSION ON COMMUNITY GOAL
        </h2>
        <div
          style={{
            backgroundColor: "#5BB3B7",
            width: "50px",
            height: "5px",
            marginBottom: "20px ",
          }}
        >
          {" "}
        </div>
        <Link to="/event" style={{
          textDecoration: "none",
          color: "rgb(16,21,34)",
          cursor: "pointer",
        }}>
          <div>
            Yesterday we held our first session at the Ajegunle Ikorodu #community to validate our workplan and ensure that this plan is...
        </div>
        </Link>
      </div>

    </div>
  );
};

export default SuccessStory;
