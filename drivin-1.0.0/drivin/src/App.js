import { Route, Switch } from "react-router";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./container/HOME/Home"
import About from "./container/About/About";
import Courses from "./container/courses/Courses";
import Pages from "./container/Pages/Pages";
import Features from "./container/Features/Features";
import Appointment from "./container/Appointment/Appointment";
import Our_Team from "./container/Our_Team/Our_Team";
import Testimonial from "./container/Testimonial/Testimonial";
import Contact from "./container/Contact/Contact";
import Get_Started from "./container/Get_Started/Get_Started";
import Login from "./container/Login/Login";
import Testimonials from "./container/Slider/Testimonials";
import Slider from "./container/Slider/Slider";
// import Testimonials from "./Components/Slider/Testimonials";


function App() {
  return (
  <>
  <Header/>
  <Switch>
    <Route exact path={"/"} component={Home}/>
    <Route exact path={"/About"} component={About}/>
    <Route exact path={"/Courses"} component={Courses}/>
    <Route exact path={"/Pages"} component={Pages}/>
    <Route exact path={"/Features"} component={Features}/>
    <Route exact path={"/Appointment"} component={Appointment}/>
    <Route exact path={"/Our_Team"} component={Our_Team}/>
    <Route exact path={"/Testimonial"} component={Testimonial}/>
    <Route exact path={"/Contact"}component={Contact}/>
    <Route exact path={"/Login"} component={Login}/>
    <Route exact  path={"/Get_Started"}component={Get_Started}/>
    <Slider/>
  </Switch>
  <Footer/>

  </>
  );
}

export default App;
