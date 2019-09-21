import React from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import axios from '../../axiosConfig';

import Loading from '../Loading';

class PostDetail extends React.Component {

  state = {
    post: '',
    error: ''
  }

  componentDidMount = () => {
    console.log(this.props)
    const id = this.props.id;
    const post = this.props.posts.filter(post => String(post.pk) === id);

    if (post.length===1) {
      this.setState({post: post[0]})
    } else {
      axios.get(`/posts/${id}/`)
        .then(response => this.setState({post: response.data}))
        .catch(error => this.setState({error: error.response.statusText}))
    }
  }

  render = () => {
    let post = {};
    if (this.state.post) {
      post = (
        <div className="col-12">
          <h5 className="card-text text-center">{this.state.post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-center">
            {this.state.post.created_by},
            {moment(this.state.post.created_at, "YYYYMMDD").fromNow()}
          </h6>
          <br />
          <p>{this.state.post.body}</p>
        </div>
      )
    }
    else {
      if (this.state.error) {
        post = <div className="col-12 text-center"><h1>{this.state.error}</h1></div>;
      } else {
        post = <div className="col-12 text-center"><Loading /></div>
      }
    }

    return (
      <div className="row mt-5">
        {post}
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts,
})

export default connect(mapStateToProps)(PostDetail);