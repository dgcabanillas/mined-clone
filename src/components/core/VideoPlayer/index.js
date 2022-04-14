import React, { useContext } from 'react';
import AppContext from 'src/components/context/app/app.context';
import styles from './styles.module.scss';

const VideoPlayer = () => {
  const { video, setVideo } = useContext(AppContext);

  const handleClose = () => { setVideo(null) }

  if( !video ) return null;

  const { source } = video;

  return (
    <div className={styles['VideoPlayer']}>
      <video
        type="video/mp4"
        src={source}
        className={styles['VideoPlayer__video']}
        controls
      ></video>
      <button 
        onClick={handleClose}
        className={styles['VideoPlayer__close']}
      > X </button>
    </div>
  )
}

export default VideoPlayer;