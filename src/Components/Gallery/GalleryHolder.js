import React from 'react'
import Footer from "../../Home/Build/Footer/index";
import NavBar from "../../Home/NavBar/index"
import SideBar from "../../Home/SideBar/SideBar"

function GalleryHolder() {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };


    return (
        <>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <br/>
        <br/>
        <br/>
        <br/>
        {/* <br/> */}
        <div>
            HI AM GALLERY
        </div>
        <Footer />
        </>
    )
}

export default GalleryHolder
