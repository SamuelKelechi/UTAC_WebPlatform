import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import FlashMessage from 'react-flash-message';
import { Link } from 'react-router-dom';
import moment from 'moment';
import React, { useState, useEffect } from "react";
import { app } from "../Base";


const db = app.firestore();

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {

  const [uploads, setUploads] = useState([]);

  const getData = async () => {
    await db
      .collection("utac")
      .orderBy("date", "desc")
      .limit(2)
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });

        setUploads(item);
      });
  };

  const classes = useStyles();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div><h2 style={{ fontWeight: "bold", fontSize: "20" }}>Updates</h2></div>
      {/* <FlashMessage duration={5000} persistOnHover={true}> */}

      {uploads.map(({ id, avatar, title, content, story, date }) => (
        <Card className={classes.root}>
          <CardActionArea >
            <CardMedia
              className={classes.media}
              image={avatar}
              title="Blog Image"
            />
            <CardContent>
              <p style={{ fontSize: "13px" }}>Posted {moment(date).fromNow()}</p>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: "left" }}>
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/event">
              <Button size="small" color="primary">
                Read More..
            </Button>
            </Link>
            <Link to="/event">
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}

      {/* </FlashMessage> */}
    </>
  );
}