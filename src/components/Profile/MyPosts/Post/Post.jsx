import React from 'react';
import s from './Post.module.css';
import me from '../../../../assets/images/me.jpg';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img alt="My Photo" src={me} />
      {props.message}
      <div>
        {props.likes} <span>likes</span>
      </div>
    </div>
  );
};

export default Post;
