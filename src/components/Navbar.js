import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        {
          !props.auth.token ? (<li className="nav-item"><Link className="nav-link" to="/login/">Login</Link></li>):''
        }
      </ul>
      <div className="my-2my-lg-0">
        {props.auth.username}
      </div>
    </div>
  </nav>
);

const mapStateToProps = ({auth}) => ({
  auth
});

export default connect(mapStateToProps)(Navbar);
