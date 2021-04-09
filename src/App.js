import logo from './logo.svg';
import './App.css';
import Event from "./Event/Event";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactUs from "./Contact/ContactUs";
// import Blog from "./Blogpage/Blog/Blog";
import HomeScreen from "./Home/Build/HomeScree";
import EventFull from "./Event/EventFull"
import AdminPage from './Components/AdminPage';



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
          <Route path="/lotsadmin2021" exact component={AdminPage} />
          {/* <Route path="/blog" exact component={Blog} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
