import React from 'react';

const FieldErrors = ({ errors }) => {
  const errorElem = errors ?
    errors.map((error, index) => <li key={index}>{error}</li>):[]

  return (
    <div className="invalid-feedback">
      <ul>{errorElem}</ul>
    </div>
  )
}

export default FieldErrors;
