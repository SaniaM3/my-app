import React from "react";
import MyPosts from "./My posts/MyPosts";
import s from './Profile.module.css';

const Content = () => {
  return <div className={s.content}>
    <div>
      <img className={s.img} src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"></img>
    </div>
    <div>
      avatar + description
    </div>
    <MyPosts />
  </div>

}

export default Content;