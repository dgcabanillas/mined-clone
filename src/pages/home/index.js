import React from 'react';
import { homeMenu } from 'src/fakedb/home-menu';
import HomeSection from './components/HomeSection';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles['Home']}>
      { homeMenu.map( item => <HomeSection key={item.id} data={item} />)}
    </div>
  )
}

export default Home;