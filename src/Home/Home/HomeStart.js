import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './HomeStart.css'


const HomeStart = () => {


  return (
    <center style={{ marginTop: "80px" }}>
      <Carousel autoplay effect="fade">
        <div className="HomeStart_Style1">
          <div>Umbrella for the <br />African Child</div>
        </div>
        <div className="HomeStart_Style2" >
          <div>We stand <br />to protect <br /> the African child</div>
        </div>
        <div className="HomeStart_Style3" >
          <div>Zero Hunger<br /> and <br />Mentorship</div>
        </div>
        <div className="HomeStart_Style4" >
          <div>We stand for Quality Education in Rural Area</div>
        </div>
      </Carousel>,
    </center>
  );
};

export default HomeStart;
