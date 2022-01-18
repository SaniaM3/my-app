import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likes: '1' },
    { id: 2, message: 'Its my first post', likes: '3' },
    { id: 3, message: 'Haha', likes: '11' },
    { id: 4, message: 'Oh', likes: '100' },
  ]
let postsElements = posts.map(p =>  <Post message = {p.message} id = {p.id} likes = {p.likes} />);
  
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;