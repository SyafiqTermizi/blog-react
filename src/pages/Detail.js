import React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { getPosts } from '../redux/posts/actions';

import axios from '../axiosConfig'
import Loading from '../components/Loading';
import CommentCard from '../components/CommentCard';

class Detail extends React.Component {

  state = {
    post: '',
    comments: []
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.fetchPost(id);
    this.fetchComments(id);
  }

  fetchPost = id => {
    const post = this.props.posts.filter(post => String(post.pk) === id);

    if (post.length===1) {
      this.setState({post: post[0]})
    } else {
      axios.get(`/posts/${id}/`)
        .then(response => this.setState({post: response.data}))
        .catch(error => console.log(error))
    }
  }

  fetchComments = id => {
    axios.get(`/comments/?post=${id}`)
      .then(response => this.setState({comments: response.data}))
      .catch(error => console.log(error))
  }

  render = () => {
    const post = this.state.post ?
      (
        <div className="col-12">
          <h5 className="card-text text-center">{this.state.post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-center">
            {this.state.post.created_by},
            {moment(this.state.post.created_at, "YYYYMMDD").fromNow()}
          </h6>
          <br />
          <p>{this.state.post.body}</p>
        </div>
      ):
      (<div className="text-center"><Loading /></div>)
  
    const comments = this.state.comments.map(comment => (
      <CommentCard
        created_by={comment.created_by}
        created_at={moment(comment.created_at, "YYYYMMDD").fromNow()}
        body={comment.body}
        key={comment.created_at}
      />
    ))

    return (
      <React.Fragment>
        <div className="row">
          {post}
        </div>
        <div className="row">
          <div className="col-12">
            {comments}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts
});

const mapDispatchToProps = {
  getPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
