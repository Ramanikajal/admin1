import { Route, Router, Switch } from "react-router";
import Layout from "./cmponants/Layout/Layout";
import doctor from "./conteiner/doctor/doctor";
import Medicine from "./conteiner/medicines/Medicine";
import Promise_example from "./conteiner/Promise_example/Promise_example";


function App() {
  return (
    <>


      <Layout>
        <Switch>

          <Route exact path={'/medicines'} component={Medicine} />
          <Route exact path={'/doctor'} component={doctor} />
          <Route exact path={'/Promise_example'} component={Promise_example} />
        
    
        </Switch>
      </Layout>


    </>
  );
}


export default App;
