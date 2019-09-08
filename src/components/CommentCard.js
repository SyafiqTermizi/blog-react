import React from 'react';

const CommentCard = props => (
  <div className="card mt-3">
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">
        {props.created_by}, {props.created_at}
      </h6>
      <p className="card-text">
        {props.body}
      </p>
    </div>
  </div>
)

export default CommentCard;
