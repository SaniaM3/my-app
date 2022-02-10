import React from "react";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = (props) => {


  let posts = [
    { id: 1, message: 'Hi, how are you?', likes: '1' },
    { id: 2, message: 'Its my first post', likes: '3' },
    { id: 3, message: 'Haha', likes: '11' },
    { id: 4, message: 'Oh', likes: '100' },
  ]

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  )
}

export default Content;