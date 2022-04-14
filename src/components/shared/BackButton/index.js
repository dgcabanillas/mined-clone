import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['BackButton']}>
      <button 
        onClick={() => { navigate(-1) }}
        className={styles['BackButton__button']}
      >
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill='#ffffff' width={42} height={42}>
          <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" stroke='#ffffff' strokeWidth={1}></path>
        </svg>
      </button>
    </div>
  )
}

export default BackButton;