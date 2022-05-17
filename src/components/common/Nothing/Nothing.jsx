import React from 'react';
import nothing from './../../../assets/images/nothing.jpg';
import s from './Nothing.module.css';

const Nothing = () => {
  return (
    <div>
      <div>
        <p className={s.text}>К сожалению пока что страница пуста(((</p>
      </div>
      <div>
        <img className={s.nothing} src={nothing} />
      </div>
    </div>
  );
};

export default Nothing;
