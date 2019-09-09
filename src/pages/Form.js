import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../redux/posts/actions';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {title: '', body: 'Post Body'},
      token: this.props.token,
      submitted: false
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
    console.log(token)
    this.props.createPost(post, token);
    this.setState({submitted: true})
  }

  render = () => {
    const elem = this.state.submitted ?
      <Redirect to="/" />:
      (
      <div className="row">
        <div className="col-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="title"
                onChange={this.handleChange}
                value={this.state.post.title}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                name="body"
                onChange={this.handleChange}
                value={this.state.post.body}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      )
    return elem;
  }
}

const mapDispatchToProps = {
  createPost
};

export default connect(null, mapDispatchToProps)(Form);
