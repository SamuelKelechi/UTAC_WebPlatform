import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { app } from "../Base";
import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Back from './Back.jpg'
import { Button, CardActionArea, CardActions } from '@mui/material';


const db = app.firestore();


export default function MediaCard() {

  const [uploads, setUploads] = useState([]);

  const getData = async () => {
    await db
      .collection("blog")
      .orderBy("time", "desc")
      .limit(3)
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });

        setUploads(item);
      });
  };

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div style={{display:"flex", height:"60px", justifyContent:"center", alignItems:"center", marginTop:"30px"}}>
        <h2 style={{color:"#1F5ABC", width:"90px", fontSize:"30px"}}>BLOG</h2> 
        <h3 style={{color:"#1F5ABC"}}>UPDATES</h3>
      </div>
      <Container>
        <CardWrapper>
    {uploads.map(({id, title, avatar, story, time}) => (
      <Link to={`/eventfull/${id}`}>
      <Card key={id} sx={{ maxWidth: 345 }} style={{margin:"8px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
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
      </CardActionArea>
      <CardActions style={{display:"flex", justifyContent:"space-between", alignSelf:"flex-end"}}>
        <Button size="small" color="primary">
          Read
        </Button>
        <p style={{marginBottom:"-1px", color:"grey"}}>Posted {moment(time.toDate()).fromNow()}</p>
      </CardActions>
    </Card>
    </Link>
    ))}
        
        
        </CardWrapper>
        <br/>
        <Link to="/event"><More>VIEW MORE...</More></Link>
      </Container>
      <br/>
    </>
  );
}


const Container = styled.div`
width: 100%;
background: url(${Back});
background-position: center;
background-size: cover;
padding: 10px;
`
const CardWrapper = styled.div`
width: 100%;
display: flex;
justify-content:center;
flex-wrap: wrap;
align-items: center;

@media screen and (max-width: 450px) {
  padding: 10px
}
`

const More = styled.div`
font-weight: bold;
font-size: 14px;
height: 30px;
width: 105px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid lightblue;
background-color: white;
border-radius: 2px;
:hover{
  /* color: #01BF71; */
  background-color: lightgrey;
}
`


