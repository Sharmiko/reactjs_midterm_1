import React from 'react';

import './comments.style.scss';

const Comment = ({ info: { name, body, email } }) => {
  return (
    <div className="comment">
      <h4 className="comment__name">Short Description: {name}</h4>
      <p className="comment__body">Content: {body}</p>
      <p className="comment__email">Posted By: {email}</p>
    </div>
  );
};

export default Comment;
