import React, { useState, useEffect } from 'react'
import NavBar from '../Home/NavBar/index'
import SideBar from '../Home/SideBar/SideBar'
import Footer from '../Home/Build/Footer/index'

import { app } from "../Base";

const db = app.firestore();




function Testimonial() {
  const [uploads, setUploads] = useState([]);

  const getData = async () => {
    await db
      .collection("testimony")
      // .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });

        setUploads(item);
      });
  };



  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };



  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <div style={{
        marginTop: "85px",
        width: "100%",
        fontSize: "25px",
        textAlign: "center",
        fontWeight: "bold"
      }}>
        Testimonials
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          marginTop: "10px",
          marginBottom: "20px ",
        }}
      >


        {uploads.map(({ id, name, test }) => (
          <div
            style={{
              width: "90%",
              marginLeft: "10px",
              // height: "150px",
              textAlign: "left",
              border: "1px solid lightblue",
              padding: "20px 10px",
              margin: "5px"
            }}
          >
            <div>
              {test}
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
              {name}
            </h2>

          </div>

        ))}


      </div>
      <Footer />
    </>
  )
}

export default Testimonial
