import React from "react";
import s from './Profile.module.css';

function Profile() {
  return (
    <div className={s.content}>
      <div className={s.contentImg}>

      </div>
      <div className={s.header}>
        <img src="https://cute-as-hell.pl/environment/cache/images/500_500_productGfx_3689/totoro.jpg" alt="ava" />
        <div className={s.headerDescr}>
          <h2>I am Tottoro</h2>
          <p>And I am not a fantasy creature!</p>
          <p>No war!</p>
        </div>
      </div>
      <div className={s.wall}>
        My posts
        <div>New Post</div>
        <div className="posts">
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
          <div className={s.item}>post3</div>
          <div className={s.item}>post4</div>
        </div>
      </div>
    </div >
  );
}

export default Profile;