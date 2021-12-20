import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './HomeStart.css'
import styled from 'styled-components';


const HomeStart = () => {


  return (
    <center style={{ marginTop: "80px" }}>
      <Carousel autoplay effect="fade">
        <div className="HomeStart_Style1">
          <div><i>Umbrella for the <br />African Child</i></div>
        </div>
        <div className="HomeStart_Style2" >
          <div className="HomeStart_Style22"><i>We stand <br />to protect <br /> the African child</i></div>
        </div>
        <div className="HomeStart_Style3" >
          <div><i>Zero <br/>Hunger </i></div>
        </div>
        <div className="HomeStart_Style4" >
          <div><i>Quality Education for Children in Rural Area</i></div>
        </div>
        {/* <div className="HomeStart_Style4" >
          <div><i>Quality Education for Children in Rural Area</i></div>
        </div> */}
      </Carousel>
      <NavBtn>
            <NavBtnLink to="/">Donate</NavBtnLink>
      </NavBtn>
    </center>
  );
};

export default HomeStart;


const NavBtn = styled.div`
  display: none;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const NavBtnLink = styled.div`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  /* color: #010606; */
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  padding: 10px 40px;

  @media screen and(max-width: 768px) {
    display: flex;
    color: pink;
    background: black;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: white;
    color:#01bf71 ;
  }
`