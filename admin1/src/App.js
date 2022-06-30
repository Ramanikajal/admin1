import { Route, Switch } from 'react-router-dom';
import Doctor from './cmponants/Doctor/Doctor';
import Layout from './conteiner/Layout/Layout';
import Medicines from './cmponants/Medicines/Medicines';
import { configureStore } from './Redux/Store';
import { Provider } from 'react-redux'
import Counter from './conteiner/Counter/Counter';

function App() {
  const Store = configureStore();

  return (
    <>
    <Provider store={Store}>
    <Layout>
      <Switch>
        <Route exact path={'/medicines'} component={Medicines} />
        <Route exact path={'/doctor'} component={Doctor} />
        <Route exact path={'/Counter'} component={Counter} />

      </Switch>
    </Layout>
    </Provider>
    </>
  );
}

export default App;
