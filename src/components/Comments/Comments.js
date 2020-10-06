import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  const { comments } = props;
  
  return (
    <div>
      {comments.map(commentObj => {
        return <Comment key={commentObj.id} comment={commentObj} />
        })}
    </div>
  );
};

export default Comments;