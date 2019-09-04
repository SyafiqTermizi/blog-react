import React from 'react';

const Card = props => (
  <div className="card mt-5">
    <div className="card-body">
      <h5 className="card-title">
        {props.title}
      </h5>
      <h6 className="card-subtitle mb-2 text-muted">
        {props.created_by} {props.created_at}
      </h6>
      <p className="card-text">
        {props.body}
      </p>
    </div>
  </div>
)

export default Card;
