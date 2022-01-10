import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.img} src='https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3' />
      {props.message}
      <div>
      <span>Likes </span>{props.likes}
      </div>
    </div>
  )
}

export default Post;