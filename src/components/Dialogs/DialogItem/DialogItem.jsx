import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div>
      <div className={s.dialogItem}>
        {props.ava}
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
