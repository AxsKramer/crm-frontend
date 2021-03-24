import React, {lazy, Suspense} from 'react';
import { Route } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';

const Login = lazy(() => import('../pages/Login/Login'));
const Home = lazy(() => import('../pages/Home'));
const NewUser = lazy(() => import('../pages/NewUser'));

const Clients = lazy(() => import('../pages/Clients'));
const NewClient = lazy(() => import('../pages/NewClient'));
const EditClient = lazy(() => import('../pages/EditClient'));

const Products = lazy(() => import('../pages/Products/Products'));
const NewProduct = lazy(() => import('../pages/NewProduct'));
const EditProduct = lazy(() => import('../pages/EditProduct'));

const Orders = lazy(() => import('../pages/Orders'));
const NewOrder = lazy(() => import('../pages/NewOrder'));

const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/users' component={NewUser} />
      <Route exact path='/clients' component={Clients} />
      <Route exact path='/clients/client/new' component={NewClient} />
      <Route exact path='/clients/client/edit/:clientId' component={EditClient} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/products/product/new' component={NewProduct} />
      <Route exact path='/products/product/edit/:productId' component={EditProduct} />
      <Route exact path='/orders' component={Orders} />
      <Route exact path='/clients/client/new/order/:clientId' component={NewOrder} />
    </Suspense>
  );
};

export default Routes;
