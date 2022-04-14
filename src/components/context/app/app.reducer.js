import { types } from './app.types';

export const appReducer = (state, action) => {
  switch( action.type ) {
    case types.SET_SECTION_OPTION: 
      return { ...state, sectionOption: action.payload }
    case types.SET_TUTOR: 
      return { ...state, tutor: action.payload }
    case types.SET_VIDEO: 
      return { ...state, video: action.payload }
    default: 
      return state;
  }
}