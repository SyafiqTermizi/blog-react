import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/posts/actions';

import Card from '../components/PostCard';


class Home extends React.Component {

  componentDidMount = () => {
    this.props.getPosts();
    console.log(this.props)
  }

  render = () => {
    const elem = this.props.posts.map(post => (
      <Card
        key={post.pk}
        title={post.title}
        created_by={post.created_by}
        created_at={post.created_at}
        body={post.body}
      />
    ))
    return (
      <div className="row">
        <div className="col-12 text-center">
          {elem}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => ({
  posts: posts.posts
})

const mapDispatchToProps = {
  getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);