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
        <div>
          <img
            src={founder}
            alt="founder"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "contain",
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
            top: "100px"
          }}
        >

          <div><b><h3>SAMUEL MENSAH</h3></b></div>
        </div>
      </div>

      {/* 

      <div
        style={{
          width: "300px",
          // backgroundColor: "blue",
          margin: "10px",
          display: "flex",
          marginTop: "0px"
        }}
      >
        <div>
          <img
            src={admin}
            alt="founder"
            style={{
              width: "250px",
              height: "267px",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "60px",
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            fontSize: "12px",
            right: "40px",
            textAlign: "left",
            top: "27px"
          }}
        >
          <h3>HEAD OF ADMIN</h3>
          <div><b>Mr Samuel Oparaeke</b></div>
        </div>
      </div>
 */}

      {/* 
      <div
        style={{
          width: "300px",
          // backgroundColor: "blue",
          margin: "10px",
          display: "flex",
          marginTop: "18px"
        }}
      >
        <div>
          <img
            src={asstAdmin}
            alt="founder"
            style={{
              width: "250px",
              height: "260px",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "60px",
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            fontSize: "12px",
            right: "40px",
            textAlign: "left",
            top: "27px"
          }}
        >
          <h3>ASST. HEAD OF ADMIN</h3>
          <div><b>Mr. Vitus Nwaogu</b></div>
        </div>
      </div> */}



      {/* <div
        style={{
          width: "300px",
          // backgroundColor: "blue",
          margin: "10px",
          display: "flex",
          marginTop: "0px"
        }}
      >
        <div>
          <img
            src={ict}
            alt="founder"
            style={{
              width: "250px",
              height: "280px",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "60px",
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            fontSize: "12px",
            right: "40px",
            textAlign: "left",
            top: "27px"
          }}
        >
          <h3>HEAD ICT</h3>
          <div><b>Ayinla Jamiu</b></div>
        </div>
      </div> */}



    </div >
  );
};

export default Story;
