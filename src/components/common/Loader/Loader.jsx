import React from 'react';
import s from './Loader.module.css';
import loadingImg from '../../../assets/images/loading.gif';

const Loader = (props) => {
  return <img src={loadingImg} className={s.loading} />;
};

export default Loader;
