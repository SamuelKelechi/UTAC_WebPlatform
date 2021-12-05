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
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";




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
      .collection("utac")
      .orderBy("date", "desc")
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
  const classes = useStyles();
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

        <div>
        <div>All Blog (Events) will come here</div>
        <div>
        THE CARD WRAPPING HERE
        </div>
          
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Event;





// {uploads.map(({ id, avatar, title, content, story, date }) => (
//   <Card key={id} className={classes.root}>
//     <CardActionArea>
//       <Link to={`/eventfull/${id}`}>
//         <div
//           style={{
//             height: "200px",
//             width: "100%",
//             backgroundColor: "gray",
//           }}
//         >
//           <img style={{ height: "100%", width: "100%" }} src={avatar} alt="images" />
//         </div>
//       </Link>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2" style={{
//           textTransformed: "uppercase"
//         }}>
//           <p style={{ fontSize: "13px" }}>Posted {moment(date).fromNow()}</p>
//           {title}

//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {content}
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//   </Card>
// ))}