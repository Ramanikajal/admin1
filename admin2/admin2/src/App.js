import { Route, Router, Switch } from "react-router";
import Layout from "./cmponants/Layout/Layout";
import doctor from "./conteiner/doctor/doctor";
import Medicine from "./conteiner/medicines/Medicine";
import { configureStore } from "./conteiner/Redux/Store";
import { Provider } from 'react-redux'
import Counetr from "./conteiner/counter/Counetr";
import Promise_example from "./conteiner/Promise_example/Promise_example";


function App() {
  const store  = configureStore();
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Switch>

            <Route exact path={'/medicines'} component={Medicine} />
            <Route exact path={'/doctor'} component={doctor} />
            <Route exact path={'/Promise_example'} component={Promise_example} />
            <Route exact path={'/counetr'} component={Counetr} />

          </Switch>
        </Layout>
      </Provider>


    </>
  );
}


export default App;
