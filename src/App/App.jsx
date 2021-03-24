import React, { useContext } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import CRMProvider, { CRMContext } from "../context/authContext";
import Layout from "../container/Layout";
import Routes from '../routes/Routes';

const App = () => {
  const [auth, setAuth] = useContext(CRMContext);

  return (
    <CRMProvider value={[auth, setAuth]}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Routes />
          </Switch>
        </Layout>
      </BrowserRouter>
    </CRMProvider>
  );
};

export default App;
