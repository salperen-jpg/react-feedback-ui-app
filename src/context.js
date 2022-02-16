import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';
const FeedbackContext = React.createContext();
const initialState = {
  name: 'just for trying',
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FeedbackContext.Provider value={{ ...state }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => {
  return useContext(FeedbackContext);
};
