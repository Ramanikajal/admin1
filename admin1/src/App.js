import { Route, Switch } from 'react-router-dom';
import Doctor from './cmponants/Doctor/Doctor';
import Layout from './conteiner/Layout/Layout';
import Medicines from './cmponants/Medicines/Medicines';
import { configureStore } from './Redux/Store';
import { Provider } from 'react-redux'
import Counter from './conteiner/Counter/Counter';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const {store ,persistor}  = configureStore();

  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Layout>
      <Switch>
        <Route exact path={'/medicines'} component={Medicines} />
        <Route exact path={'/doctor'} component={Doctor} />
        <Route exact path={'/Counter'} component={Counter} />

      </Switch>
    </Layout>
    </PersistGate>
    </Provider>
    </>
  );
}

export default App;
