import React from 'react';

const ReadMore = props => {
  let { text } = props;

  if (text.length > 300) {
    text = text.slice(0, 300);
    text += '.....';
  }
  return (
    <p className={props.className}>
      {text}
    </p>
  )
}

export default ReadMore;
