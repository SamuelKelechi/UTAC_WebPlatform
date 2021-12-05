import React from "react";
import {BiArrowToLeft, BiArrowToRight} from 'react-icons/bi';

const Total = () => {
  return (
    <div>
      <center
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          fontSize: "25px",
          color: "#5BB3B7"
        }}
      >
        <BiArrowToRight style={{marginTop:"13px",}}/>
          <div style={{ 
          fontSize: "30px",
          fontWeight: "bolder",
          color: "#F9AF2F",
        }}>Testimonial</div>
        <BiArrowToLeft style={{marginTop:"13px"}}/>
      </center>
    </div>
  );
};

export default Total;
