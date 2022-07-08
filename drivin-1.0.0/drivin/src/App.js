import { Route, Switch } from "react-router";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./container/HOME/Home";



function App() {
  return (
  <>
  <Header/>
  <Switch>
    <Route exact path={"/"}component={Home}/>
  </Switch>
  <Footer/>

  </>
  );
}

export default App;
