import React, { useContext } from 'react';
import AppContext from 'src/components/context/app/app.context';
import CourseCard from 'src/components/shared/CourseCard';
import NothingToSee from 'src/components/shared/NothingToSee';
import Title from 'src/components/shared/Title';
import styles from './styles.module.scss';

const Tutor = () => {
  const { tutor } = useContext(AppContext);

  if( !tutor ) return null;

  const { name, courses } = tutor;

  return (
    <div className={styles['Tutor']}>
      <Title text={name}/>
      { 
        courses && courses.length ? (
          <div className={styles['Tutor__courses']}>
            { courses.map( course => <CourseCard key={course.id} data={course}/> )}
          </div>
        ) : (
          <NothingToSee />
        )
      }
    </div>
  )
}

export default Tutor;