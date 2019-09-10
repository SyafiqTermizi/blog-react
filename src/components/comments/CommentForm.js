import React from 'react';
import { connect } from 'react-redux';

import { createComment } from '../../redux/comments/actions';

class CommentForm extends React.Component {

  state = {comment: {body: ''}}

  handleChange = event => {
    const {name, value} = event.target;
    let comment = {...this.state.comment, [name]: value};
    this.setState({comment});
  };

  hanndleSubmit = event => {
    event.preventDefault();
    this.props.createComment(false, this.props.id, this.props.token, this.state.comment);
    const comment = {body: ''};
    this.setState({ comment })
  }

  render = () => (
    <div className="row mt-5 mb-5">
      <div className="col-12">
        <form onSubmit={this.hanndleSubmit}>
          <div className="form-group">
            <input
              name="body"
              type="text"
              className="form-control"
              placeholder="Comment"
              onChange={this.handleChange}
              value={this.state.comment.body}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = ({ auth }) => ({
  token: auth.token
});

const mapDispatchToProps = {
  createComment
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
