import React from 'react';
import Title from 'src/components/shared/Title';
import SectionOption from 'src/components/shared/SectionOption';
import NothingToSee from 'src/components/shared/NothingToSee';
import { ecommerce } from 'src/fakedb/ecommerce';
import styles from './styles.module.scss';

const ECommerce = () => {
  const { title, options } = ecommerce;

  return (
    <div className={styles['ECommerce']}>
      <Title text={ title }/>
      { 
        options && options.length ? (
          <div className={styles['ECommerce__options']}>
            { options.map( option => <SectionOption key={option.id} data={option}/> )}
          </div>
        ) : (
          <NothingToSee />
        )
      }
    </div>
  )
}

export default ECommerce;