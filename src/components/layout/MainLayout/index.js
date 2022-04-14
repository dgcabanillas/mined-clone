import React from 'react';
import { Outlet } from 'react-router-dom';
import BackButton from 'src/components/shared/BackButton';
import styles from './styles.module.scss';

const MainLayout = () => {
  return (
    <div className={styles['MainLayout']}>
      <BackButton />
      <Outlet />
    </div>
  )
}

export default MainLayout;