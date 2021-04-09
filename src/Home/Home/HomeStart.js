import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './HomeStart.css'


const HomeStart = () => {


  return (
    <center style={{ marginTop: "80px" }}>
      <Carousel autoplay effect="fade">
        <div className="HomeStart_Style1">
          <h3>Come</h3>
        </div>
        <div className="HomeStart_Style2" >
          <h3>Go</h3>
        </div>
        <div className="HomeStart_Style3" >
          <h3>See</h3>
        </div>
        <div className="HomeStart_Style4" >
          <h3>Collect</h3>
        </div>
      </Carousel>,
    </center>
  );
};

export default HomeStart;
