import React from 'react'
import PostItem from './PostItem';

const deadline = new Date("06/30/2022").getTime();
const today = Date.now();
const numOfLeftDays = Math.round((deadline - today) / (1000 * 3600 * 24));

const PostList = ({posts}) => {
  return (
    <div>
        <center>
        <h1>Надо успеть все до Июля</h1>
        <h2>Осталось всего {numOfLeftDays} дней</h2>
      </center>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}

export default PostList