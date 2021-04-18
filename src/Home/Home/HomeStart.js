import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './HomeStart.css'


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
          <div><i>Zero Hunger<br /> and <br />Mentorship</i></div>
        </div>
        <div className="HomeStart_Style4" >
          <div><i>We stand for Quality Education in Rural Area</i></div>
        </div>
      </Carousel>
    </center>
  );
};

export default HomeStart;
