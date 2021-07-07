import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map(postsObj => {
        return (
          <Post 
            key={postsObj.id}
            post={postsObj}
            likePost={likePost}
          />
        )
      })}
    </div>
  );
};

export default Posts;