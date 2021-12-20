import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { app } from "../Base";
import moment from 'moment';
import style from 'styled-components'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Button from '@mui/material/Button';


const db = app.firestore().collection("blog");


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function EventFull() {

  const [uploads, setUploads] = useState(null);

  const { id } = useParams()
  const getSingleData = async () => {
    const docRef = await db.doc(id);
    const docData = await docRef.get();

    setUploads(docData.data());
  };


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <>
    <SingleEventContainer>
     <SingleEvent>
     <br/>
     <div style={{width:"330px", display:"flex", justifyContent:"space-between"}}>
     <Link to="/">
        <Button variant="contained" href="#contained-buttons" >
          Home
        </Button>
      </Link>

      <Link to="/event">
        <Button variant="contained" href="#contained-buttons" >
          Blog
        </Button>
      </Link>
     </div>
     
      <br/>
      
     <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            UTAC
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={uploads && uploads.title}

        subheader= {moment(uploads && uploads.time.toDate()).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={uploads && uploads.avatar}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {uploads && uploads.story}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>Method:</Typography> */}
          <Typography paragraph>
            {uploads && uploads.fullstory}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>

    <br/>
     
     </SingleEvent>
     </SingleEventContainer>
    </>
  );
}


const SingleEvent = style.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SingleEventContainer = style.div`
  width: 100%;
  display: flex;
  justify-content: center;
`