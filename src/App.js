import React from 'react';
import { Route, } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Detail from './pages/Detail';

import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-5">
        <Route exact path="/" component={Home} />
        <Route path="/login/" component={Login} />
        <Route path="/detail/:id" component={Detail} />
      </div>
    </React.Fragment>
  );
}

export default App;
