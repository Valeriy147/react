import React from 'react';
import s from './Header.module.css';
import banner from './../../assets/images/banner.png';

const Header = () => {
  return (
    <header className={s.header}>
      <img src={banner} />
    </header>
  );
};

export default Header;
