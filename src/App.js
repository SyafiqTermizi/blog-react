import React, { lazy, Suspense } from 'react';
import { Route, } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import Loading from './components/Loading';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));
const Form = lazy(() => import('./pages/Form'));

const App = props => (
  <React.Fragment>
    <Navbar />
    <Suspense fallback={<Loading />}>
      <div className="container pt-5">
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/login/" component={Login} />
        <Route
          path="/create/"
          render={ () => props.token ? <Form token={props.token} />:<Login />}
        />
      </div>
    </Suspense>
  </React.Fragment>
)

const mapStateToProps = ({auth}) => ({
  token: auth.token
});

export default connect(mapStateToProps)(App);
