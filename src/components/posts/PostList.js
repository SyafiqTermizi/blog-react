import React from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import { getPosts } from '../../redux/posts/actions';

import Loading from '../Loading';
import PostCard from './PostCard';

class PostList extends React.Component {

  componentDidMount = () => {
    if (this.props.posts.length === 0) {
      this.props.getPosts(this.props.limit);
    };
  }

  render = () => {
    const posts = this.props.posts.map(post => (
      <PostCard
        key={post.pk}
        pk={post.pk}
        title={post.title}
        created_by={post.created_by}
        created_at={moment(post.created_at, "YYYYMMDD").fromNow()}
        body={post.body}
      />
    ));
    const elem = this.props.loading ? <Loading />: posts;

    return (
      <div className="row">
        <div className="col-12">
          {elem}
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({posts, pagination}) => ({
  posts: posts.posts,
  loading: posts.isFetching,
  limit: pagination.limit
});

const mapDispatchToProps = {
  getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);