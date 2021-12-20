import React, { useState, useEffect } from "react";
import "./event.css";
import NavBar from "../Home/NavBar/index"
import SideBar from "../Home/SideBar/SideBar"
import Footer from "../Home/Build/Footer/index"
import { Link } from 'react-router-dom'
import moment from 'moment'


import { app } from "../Base";
import pic from "../Home/videos/OutReach.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 10,
  },
});

const db = app.firestore();

function Event() {
  const [uploads, setUploads] = useState([]);

  const getData = async () => {
    await db
      .collection("blog")
      .orderBy("time", "desc")
      .limit(15)
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

      <div
        style={{
          fontFamily: "poppins",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          alignItems:"center"
        }}
      >

        <div className="container">
          <div className="body_name">
            <div style={{ color: "#036e8b" }}>OUR EVENTS</div>
            <div className="feeding">
              SOME OF OUR EVENTS AND OUTREACH
          </div>
          </div>
          <div className="body_image">
            <img src={pic} alt="pic" />
          </div>
        </div>
        <div className="upcoming">
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              margin: "0px 20px 20px 20px",
              alignItems: "center",
            }}
          >
            <div className="up_event">FEATURED EVENTS</div>
            <div className="events">Blog</div>
          </div>
        </div>

        <div className="EventsHolder">
        
          <div className="EventsWrapper">

          {uploads.map(({id, title, avatar, story, time})=> (
            <Link to={`/eventfull/${id}`}>
            <Card key={id} sx={{ maxWidth: 345 }} style={{margin:"8px"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={avatar}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {story}
                  </Typography>
                </CardContent>
                <p style={{textAlign:"right", paddingRight:"18px", color:"grey"}}>Posted {moment(time.toDate()).fromNow()}</p>
              </CardActionArea>
            </Card>
            </Link>
          ))}
            
          </div>
          
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Event;

