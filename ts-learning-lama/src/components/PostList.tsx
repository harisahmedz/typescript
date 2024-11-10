import React from 'react'
import PostCard from './PostCard'
import { PostProps } from '@/types/types';


async function getData(){
    const res = await fetch('');
    if(!res.ok){
        throw new Error("https://jsonplaceholder.typicode.com/posts");
    }
    return res.json();
}
const PostList = async() => {
    const data: PostProps[] = await getData();
  return (
    <div className="postList">
      {/* <PostCard title="post title" body="postCard"/> */}
      {data.map((post: PostProps) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}

export default PostList