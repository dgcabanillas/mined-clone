import React, { useContext } from 'react';
import AppContext from 'src/components/context/app/app.context';
import styles from './styles.module.scss';

const CourseCard = ({ data }) => {
  const { title } = data;
  const { setVideo } = useContext(AppContext);

  const handleClick = () => {
    setVideo(data);
  }

  return (
    <div 
      className={styles['CourseCard']}
      onClick={handleClick}
    > 
      <span className={styles['CourseCard__title']}>{ title }</span>
    </div>
  )
}

export default CourseCard;