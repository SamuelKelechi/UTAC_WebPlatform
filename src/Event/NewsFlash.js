// import FlashMessage from 'react-flash-message';
import { Link } from 'react-router-dom';
import moment from 'moment';
import React, { useState, useEffect } from "react";
import { app } from "../Base";
import styled from 'styled-components'


const db = app.firestore();


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

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div><h2 style={{ fontWeight: "bold", fontSize: "20" }}>Updates</h2></div>
      <Container>
        <CardWrapper>
          <Card>
            Blog Updates Here
          </Card>
        </CardWrapper>
      </Container>
      
    </>
  );
}


const Container = styled.div`
`
const CardWrapper = styled.div`
`
const Card = styled.div`
`