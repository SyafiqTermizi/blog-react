import React from 'react';
import { connect } from 'react-redux';

import * as moment from 'moment';

import { getComments } from '../../redux/comments/actions';

import CommentCard from './CommentCard';
import Loading from '../Loading';

class CommentList extends React.Component {

  componentDidMount = () => {
    this.props.getComments(false, this.props.id)
  }

  render = () => {
    const comments = this.props.comments.map(comment => (
      <CommentCard
        created_by={comment.created_by}
        created_at={moment(comment.created_at, "YYYYMMDD").fromNow()}
        body={comment.body}
        key={comment.created_at}
      />
    ));
    const elem = this.props.loading ? <Loading />: comments;
    return (
      <div className="row">
        <div className="col-12">
          {elem}
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ comments }) => ({
  comments: comments.comments,
  loading: comments.isFetching
});

const mapDispatchToProps = {
  getComments
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);