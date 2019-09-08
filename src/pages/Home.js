import React from 'react';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { getPosts } from '../redux/posts/actions';

import Card from '../components/PostCard';
import Loading from '../components/Loading';


class Home extends React.Component {

  componentDidMount = () => {
    this.props.getPosts();
  }

  render = () => {
    const posts = this.props.posts.map(post => (
      <Card
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
}

const mapStateToProps = ({posts}) => ({
  posts: posts.posts,
  loading: posts.isFetching
})

const mapDispatchToProps = {
  getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);