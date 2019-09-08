import React from 'react';
import { Link } from 'react-router-dom';

import ReadMore from './ReadMore';

const Card = props => (
  <div className="card mt-5">
    <div className="card-body">
      <h5 className="card-title text-center">
        {props.title}
      </h5>
      <h6 className="card-subtitle mb-2 text-muted text-center">
        {props.created_by}, {props.created_at}
      </h6>
      <br/>
      <ReadMore text={props.body} className="card-text"/>
      <div className="text-right">
        <Link to={`detail/${props.pk}`} className="btn btn-outline-primary">
          Continue reading &gt;
        </Link>
      </div>
    </div>
  </div>
)

export default Card;
