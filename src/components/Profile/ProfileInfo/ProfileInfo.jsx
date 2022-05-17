import React from 'react';
import Loader from '../../common/Loader/Loader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <img
          alt="Profile"
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img className={s.ava} alt="AVA" src={props.profile.photos.large}></img>
        <p>NAME : {props.profile.fullName}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
