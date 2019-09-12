import React from 'react';

import PostList from '../components/posts/PostList';
import Pagination from '../components/Pagination';

const Home = () => (
  <React.Fragment>
      <PostList />
      <Pagination />
  </React.Fragment>
)

export default Home;