import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './styles.module.scss';

const HomeSection = ({ data }) => {
  const navigate = useNavigate();
  const { text, background, link } = data;

  return (
    <div 
      className={styles['HomeSection']}
      style={{ backgroundImage: `url(${background})` }}
      onClick={() => navigate(link)}
    >
      <img 
        src={text} 
        alt="section title"
        className={styles['HomeSection__image']}
      />
    </div>
  )
}

export default HomeSection;