import React from 'react';
import * as moment from 'moment';

import axios from '../../axiosConfig';

import CommentCard from './CommentCard';

class CommentList extends React.Component {

  state = {
    comments: []
  }

  componentDidMount = () => {
    const id = this.props.id;
    axios.get(`/comments/?post=${id}`)
      .then(response => this.setState({comments: response.data}))
      .catch(error => console.log(error))
  }

  render = () => {
    const comments = this.state.comments.map(comment => (
      <CommentCard
        created_by={comment.created_by}
        created_at={moment(comment.created_at, "YYYYMMDD").fromNow()}
        body={comment.body}
        key={comment.created_at}
      />
    ))
    return (
      <div className="row">
        <div className="col-12">
          {comments}
        </div>
      </div>
    )
  }
};

export default CommentList;