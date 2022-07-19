import { Route, Switch } from "react-router";
import Layout from "./cmponants/Layout/Layout";
import Medicine from "./conteiner/Medicine";


function App() {
    return (
      <>
      
      
      <Layout>
        <Switch>
          <Route exact path={'/Medicine'} component={Medicine} />
        
  
        </Switch>
      </Layout>
   
      
      </>
    );
  }


export default App;
