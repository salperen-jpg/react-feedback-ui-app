import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer/reducer';
const FeedbackContext = React.createContext();
const initialState = {
  feedbacks: [],
  isLoading: false,
  isError: false,
  feedback: {
    vote: 'null',
    feed: '',
  },
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: 'HANDLE_CHANGE', payload: { name, value } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'HANDLE_SUBMIT' });
    if (state.feedback.text) {
    }
  };
  return (
    <FeedbackContext.Provider value={{ ...state, handleChange, handleSubmit }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => {
  return useContext(FeedbackContext);
};
