import React, { useContext } from 'react';
import AppContext from 'src/components/context/app/app.context';
import NothingToSee from 'src/components/shared/NothingToSee';
import Title from 'src/components/shared/Title';
import TutorCard from 'src/components/shared/TutorCard';
import styles from './styles.module.scss';

const Tutors = () => {
  const { sectionOption } = useContext(AppContext);

  if( !sectionOption ) return null;

  const { title, tutors } = sectionOption;

  return (
    <div className={styles['Tutors']}>
      <Title text={title}/>
      { 
        tutors && tutors.length ? (
          <div className={styles['Tutors__list']}>
            { tutors.map( tutor => <TutorCard key={tutor.id} data={tutor}/> )}
          </div>
        ) : (
          <NothingToSee />
        )
      }
    </div>
  )
}

export default Tutors;