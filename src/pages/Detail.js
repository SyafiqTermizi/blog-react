import React from 'react';

import { connect } from 'react-redux';

import CommentForm from '../components/comments/CommentForm';
import PostDetail from '../components/posts/PostDetail';
import CommentList from '../components/comments/CommentList';

const Detail = props => {
  const id = props.match.params.id;
  return (
    <React.Fragment>
      <PostDetail id={id} />
      {props.token && <CommentForm id={id} />}
      <CommentList id={id} />
    </React.Fragment>
  )
}

const mapStateToProps = ({ posts, auth }) => ({
  posts: posts.posts,
  token: auth.token
});

export default connect(mapStateToProps)(Detail);
