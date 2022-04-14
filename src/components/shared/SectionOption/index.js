import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from 'src/components/context/app/app.context';
import styles from './styles.module.scss';

const SectionOption = ({ data }) => {
  const { title } = data;
  const navigate = useNavigate();
  const { setSectionOption } = useContext(AppContext);

  const handleClick = () => {
    setSectionOption( data );
    navigate('/tutors');
  }

  return (
    <div 
      className={styles['SectionOption']}
      onClick={handleClick}
    >
      <span className={styles['SectionOption__title']}>{ title }</span>
    </div>
  )
}

export default SectionOption;