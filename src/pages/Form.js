import React from 'react';
import { connect } from 'react-redux';
import { createPost, resetFormSuccess } from '../redux/posts/actions';
import { Redirect } from 'react-router-dom';

import FieldErrors from '../components/errors/FieldErrors';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {title: '', body: ''},
      token: this.props.token,
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    const post = {...this.state.post, [name]: value};
    this.setState({post});
  }

  handleSubmit = event => {
    event.preventDefault();
    const {post, token} = this.state;
    this.props.createPost(post, token);
  }

  componentWillUnmount = () => {
    this.props.resetFormSuccess();
  }

  render = () => {
    const errors = this.props.errors ? this.props.errors : {};
    const elem = this.props.success ?
      <Redirect to="/" />:
      (<div className="row mt-5">
        <div className="col-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  className={"form-control " + (errors.title ? " is-invalid": "")}
                  placeholder="Title"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.post.title}
                />
                <FieldErrors errors={errors.title} />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <textarea
                  className={"form-control " + (errors.body ? " is-invalid": "")}
                  rows="3"
                  name="body"
                  onChange={this.handleChange}
                  value={this.state.post.body}
                  placeholder="Post Body"
                />
                <FieldErrors errors={errors.body} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>)
    return elem;
  }
}

const mapDispatchToProps = { createPost, resetFormSuccess };

const mapStateToProps = ({ posts }) => ({
  loading: posts.loading,
  errors: posts.errors,
  success: posts.success
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
