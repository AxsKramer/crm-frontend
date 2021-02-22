import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CRMProvider, { CRMContext } from "../context/authContext";

import Layout from "../container/Layout";
// import Register from '../pages/Register';
import Login from "../pages/Login";
import Home from '../pages/Home';
import Register from '../pages/Register';
import Clients from '../pages/Clients';
import NewClient from '../components/NewClient';
import EditClient from '../components/EditClient';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import User from '../pages/User';
import NotFound from '../pages/NotFound';

const App = (props) => {
  const [auth, setAuth] = useContext(CRMContext);

  return (
    <CRMProvider value={[auth, setAuth]}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/new-user" component={Register} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/clients/client/new" component={NewClient} />
            <Route exact path="/clients/client/edit/:clientId" component={EditClient} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/user" component={User} />
            <Route component={NotFound} />

          </Switch>
        </Layout>
      </BrowserRouter>
    </CRMProvider>
  );
};

export default App;
