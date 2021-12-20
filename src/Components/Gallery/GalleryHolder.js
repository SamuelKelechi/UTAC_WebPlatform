import React, { useState, useEffect} from 'react'
import Footer from "../../Home/Build/Footer/index";
import NavBar from "../../Home/NavBar/index"
import SideBar from "../../Home/SideBar/SideBar"
import styled from 'styled-components'
import Back from './Image/back.jpg'
import { app } from "../../Base";


const db = app.firestore();

function GalleryHolder() {

    const [isOpen, setIsOpen] = useState(false);
    const [uploads, setUploads] = useState([]);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

   

    const getData = async () => {
      await db
        .collection("blog")
        .orderBy("time", "desc")
        .limit(40)
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
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <br/>
        <br/>
        <br/>
      
        <HeroTop>
            Explore Our Gallery
        </HeroTop>
        <ImageWrapper>
            {uploads.map(({avatar})=> (
                <ImageHolder src={avatar}/>
            ))}
        </ImageWrapper>

        <br/>
        <Footer />
        </>
    )
}

export default GalleryHolder


const HeroTop = styled.div`
    width: 100%;
    height: 400px;
    background: url(${Back});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    font-size: 45px;
    font-weight: bold;
    padding-left: 15px;
    color: white;
    text-shadow: 2px 2px 8px #E7E9EB;


    @media screen and (max-width: 550px) {
        font-size: 22px;
        justify-content: center;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: -50px;
`

const ImageHolder = styled.img`
    width: 320px;
    height: 320px;
    background-color: red;
    border-radius: 10px;
    object-fit: cover;
    margin: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    :hover {
        opacity: 0.7;
        object-fit: fill;
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width: 420px){
        width: 90%;
        margin: 5px;
    }
`
