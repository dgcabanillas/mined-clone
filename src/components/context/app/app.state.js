import { useReducer } from 'react';
import { types } from './app.types';
import AppContext from './app.context';
import { appReducer } from './app.reducer';


const AppState = ({ children }) => {
  const [state, dispatch] = useReducer( appReducer, { 
    sectionOption: null,
    tutor: null,
    video: null,
  });

  const setSectionOption = (sectionOption) => { dispatch({ type: types.SET_SECTION_OPTION, payload: sectionOption })}
  const setTutor = (tutor) => { dispatch({ type: types.SET_TUTOR, payload: tutor })}
  const setVideo = (video) => { dispatch({ type: types.SET_VIDEO, payload: video })}

  return (
    <AppContext.Provider 
      value={{
        sectionOption: state.sectionOption,
        tutor: state.tutor,
        video: state.video,
        setSectionOption,
        setTutor,
        setVideo,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppState;