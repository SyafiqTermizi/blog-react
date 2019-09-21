import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/actions';

import FieldErrors from '../components/errors/FieldErrors';
import NonFieldErrors from '../components/errors/NonFieldErros';


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

  render = () => {
    const error = this.props.auth.error ? this.props.auth.error : {};
    return (
      <React.Fragment>
        <div className="row mt-5">
          <div className="col-4 offset-md-4">
            {error.non_field_errors && <NonFieldErrors errors={error.non_field_errors} />}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    name="username"
                    className={"form-control " + (error.username ? " is-invalid": "")}
                    placeholder="Username"
                    onChange={this.handleChange}
                    required
                  />
                  <FieldErrors errors={error.username}/>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className={"form-control " + (error.password ? " is-invalid": "")}
                  placeholder="Password"
                  onChange={this.handleChange}
                  required
                />
                <FieldErrors errors={error.password}/>
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
}

const mapStateToProps = ({auth}) => ({ auth });
const mapDispatchToProps = { logIn };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
