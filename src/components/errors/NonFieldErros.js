import React from 'react';

const NonFieldErrors = ({ errors }) => {
  const errorElem = errors ?
    errors.map((error, index) => <li key={index}>{error}</li>):[]

  return (
    <div className="alert alert-danger" role="alert">
      <ul>{errorElem}</ul>
    </div>
  )
};

export default NonFieldErrors;
