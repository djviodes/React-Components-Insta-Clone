import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map((posts, index) => {
        return (
          <Post 
            key={index}
            post={posts}
            likePost={likePost}
          />
        )
      })}
    </div>
  );
};

export default Posts;