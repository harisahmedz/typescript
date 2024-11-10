import { PostProps } from '@/types/types';
import React from 'react'

const PostCard = (props:PostProps) => {
  return (
    <div className="postCard">
      <h1>{props.title}</h1>
      <h2>{props.body}</h2>
    </div>
  );
};

export default PostCard