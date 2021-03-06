import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteToken } from '../redux/auth/actions';


export const Navbar = props => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        {
          !props.auth.token && (
            <li className="nav-item">
              <Link id="login" className="nav-link" to="/login/">Login</Link>
            </li>
          )
        }
        {
          props.auth.token && (
            <li className="nav-item">
              <Link id="add" className="nav-link" to="/create/">Add post</Link>
            </li>
          )
        }
      </ul>
      <div id="logout" className="my-2 my-lg-0" onClick={() => props.deleteToken()}>
        {props.auth.username && 'Logout'}
      </div>
    </div>
  </nav>
);

const mapStateToProps = ({auth}) => ({
  auth
});

const mapDispatchToProps = {
  deleteToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
