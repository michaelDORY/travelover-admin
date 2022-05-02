import React from 'react';
import style from './style.module.css';
import Auth from '../../components/Auth/index'

const AuthLayout = () => {

  return (
    <div className={style.container}>
      <Auth />
    </div>
  );
};

export default AuthLayout;
