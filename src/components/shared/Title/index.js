import React from 'react';
import styles from './styles.module.scss';

const Title = ({ text }) => {
  return (
    <h1 className={styles['Title']}>
      { text }
    </h1>
  )
}

export default Title;