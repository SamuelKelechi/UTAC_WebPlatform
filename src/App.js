import Event from "./Event/Event";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactUs from "./Contact/ContactUs";
import GalleryHolder from "./Components/Gallery/GalleryHolder"
// import Blog from "./Blogpage/Blog/Blog";
import HomeScreen from "./Home/Build/HomeScree";
import EventFull from "./Event/EventFull"
import AdminPage from './Components/AdminPage';
import Testimonias from './Components/Testimonial';



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/event" exact component={Event} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/eventfull/:id" component={EventFull} />
          <Route path="/utacadmin2021" exact component={AdminPage} />
          <Route path="/testimony" exact component={Testimonias} />
          <Route path="/gallery" exact component={GalleryHolder} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
