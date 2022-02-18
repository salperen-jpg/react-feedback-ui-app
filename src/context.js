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
    if (state.feedback.feed) {
      dispatch({ type: 'HANDLE_SUBMIT' });
    }
  };
  const closeLoading = () => {
    dispatch({ type: 'CLOSE_LOADING' });
  };
  const deleteFeedback = (id) => {
    dispatch({ type: 'DELETE_FEEDBACK', payload: id });
  };
  return (
    <FeedbackContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        closeLoading,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => {
  return useContext(FeedbackContext);
};
