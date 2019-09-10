import React from 'react';

import { connect } from 'react-redux';

import CommentForm from '../components/comments/CommentForm';
import PostDetail from '../components/posts/PostDetail';
import CommentList from '../components/comments/CommentList';

class Detail extends React.Component {

  render = () => {
    const id = this.props.match.params.id;

    return (
      <React.Fragment>
        <PostDetail id={id} />
        <CommentForm id={id} />
        <CommentList id={id} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ posts }) => ({posts: posts.posts});

export default connect(mapStateToProps)(Detail);
