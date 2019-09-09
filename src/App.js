import React from 'react';
import { Route, } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './pages/Login';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Form from './pages/Form';

import Navbar from './components/Navbar';

const App = props => (
  <React.Fragment>
    <Navbar />
    <div className="container pt-5">
      <Route exact path="/" component={Home} />
      <Route path="/login/" component={Login} />
      <Route path="/detail/:id" component={Detail} />
      <Route
        path="/create/"
        render={ () => props.token ? <Form token={props.token} />:<Login />}
      />
    </div>
  </React.Fragment>
)

const mapStateToProps = ({auth}) => ({
  token: auth.token
});

export default connect(mapStateToProps)(App);
