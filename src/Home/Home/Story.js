import React from "react";
import admin from "../videos/Mr_Sam_Head_of_Admin-removebg-preview.png";
import founder from "../videos/UTAC_Founder.png";
import ict from "../videos/Ayinla_Jamiu_ICT_Teacher-removebg-preview.png";
import asstAdmin from "../videos/Nwaogu_Vitus_English_Teacher-removebg-preview.png";

const Story = () => {
  return (
    <div
      style={{
        display: "flex",
        // flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#F4F6FC",
      }}
    >

      <div
        style={{
          width: "300px",
          // backgroundColor: "blue",
          margin: "5px",
          display: "flex",
          marginTop: "0px",
          // height: "400px",
        }}
      >
        <div style={{top:"0"}}>
          <img
            src={founder}
            alt="founder"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "contain",
              marginTop:"-50px"
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "80px",
            // backgroundColor: "blue",
            display: "flex",
            height: "70px",
            fontSize: "15px",
            right: "60px",
            textAlign: "left",
            top: "50px"
          }}
        >

          <div> 
          <b><h3>SAMUEL KWAME MENSAH</h3></b>
          </div>
        </div>
      </div>



     


    </div >
  );
};

export default Story;
