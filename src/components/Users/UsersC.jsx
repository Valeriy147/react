import React from 'react';
import userPhoto from './../../assets/images/unnownUser.png';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

let UsersC = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <p className={s.pageNumbers}>
        Information about users was taken from ajax request. If they don't please show up, turn on
        <b> VPN</b>
      </p>
      <div className={s.pageNumbers}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}>
              {p > props.startPage && p < props.endPage ? p + ' ' : ''}
            </span>
          );
        })}
      </div>
      <div className={s.pageNumbers}>
        <button className={s.button} onClick={props.showPrevPages}>
          show previous
        </button>
        <button className={s.button} onClick={props.showNextPages}>
          show next
        </button>
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  className={s.userPhoto}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}>
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}>
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default UsersC;
