import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from 'src/components/context/app/app.context';
import styles from './styles.module.scss';

const TutorCard = ({ data }) => {
  const navigate = useNavigate();
  const { name, profile, courses } = data;
  const { setTutor } = useContext(AppContext);

  const handleClick = () => {
    setTutor( data );
    navigate('/tutor');
  }

  return (
    <div 
      className={styles['TutorCard']}
      onClick={handleClick}
    > 
      <img src={profile} className={styles['TutorCard__image']} alt="professor profile"/>
      <div className={styles['TutorCard__content']}>
        <span className={styles['TutorCard__name']}>{ name }</span>
        <span className={styles['TutorCard__counter']}>Cantidad de cursos: { courses?.length || 0 }</span>
      </div>
    </div>
  )
}

export default TutorCard;