import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.img} src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        avatar + description
      </div>
    </div>
  )
}

export default ProfileInfo;