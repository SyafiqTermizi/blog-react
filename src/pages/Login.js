import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/actions';


class Login extends React.Component {

  state = { username: '', password: '', success: false}

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({...this.state, [name]: value});
  }

  handleSubmit = event => {
    const {username, password} = this.state;
    event.preventDefault();
    this.props.logIn(username, password);
  }

  componentDidUpdate = () => {
    if (this.props.auth.token) {
      this.props.history.goBack();
    }
  }

  render = () => (
    <React.Fragment>
      {
        this.props.auth.error &&
       (
        <div className="row">
          <div className="col-4 offset-md-4">
            <div className="alert alert-danger" role="alert">
              Inavalid Username/Password
            </div>
          </div>
        </div>
        )
      }
      <div className="row">
        <div className="col-4 offset-md-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({auth}) => ({
  auth
});

const mapDispatchToProps = {
  logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
