import { Route, Switch } from 'react-router-dom';
import Medicines from './cmponants/Medicines/Medicines';
import Doctor from './cmponants/Doctor/Doctor';
import Layout from './conteiner/Layout/Layout';

function App() {
  return (
    <>
    <Layout>
      <Switch>
        <Route exact path={'/medicines'} component={Medicines} />
        <Route exact path={'/doctor'} component={Doctor} />
      </Switch>
    </Layout>
    </>
  );
}

export default App;
