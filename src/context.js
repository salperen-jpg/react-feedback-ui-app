import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer/reducer';
import {
  HANDLE_SUBMIT,
  HANDLE_CHANGE,
  CLOSE_LOADING,
  DELETE_FEEDBACK,
  SET_RATE,
  START_EDIT,
  FINISH_EDIT,
  CLOSE_ALERT,
  TOGGLE_ERROR,
  CLOSE_ERROR,
} from './reducer/actions';
const FeedbackContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem('feedback');
  if (list) {
    return JSON.parse(localStorage.getItem('feedback'));
  } else {
    return [];
  }
};
const initialState = {
  feedbacks: getLocalStorage(),
  isLoading: false,
  isAlert: { show: false, msg: '', status: '' },
  isError: false,
  feedback: {
    vote: null,
    feed: '',
  },
  isEditing: false,
  editingID: null,
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // HANDLE FEEDBACK STATE
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };
  // CHANGING VOTE
  const handleVoting = (e) => {
    const newValue = e.target.dataset.value;
    dispatch({ type: SET_RATE, payload: parseInt(newValue) });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.feedback.feed && state.feedback.vote && state.isEditing) {
      dispatch({ type: FINISH_EDIT });
    } else if (state.feedback.feed && state.feedback.vote) {
      dispatch({ type: HANDLE_SUBMIT });
    } else {
      dispatch({ type: TOGGLE_ERROR });
    }
  };
  // LOADING
  const closeLoading = () => {
    dispatch({ type: CLOSE_LOADING });
  };
  // ERROR

  //CLOSE ERROR
  const closeError = () => {
    dispatch({ type: CLOSE_ERROR });
  };
  // DELETE
  const deleteFeedback = (id) => {
    dispatch({ type: DELETE_FEEDBACK, payload: id });
  };

  // EDIT
  const editFeedback = (id) => {
    dispatch({ type: START_EDIT, payload: id });
  };
  // CLOSE ALERT
  const closeAlert = () => {
    dispatch({ type: CLOSE_ALERT });
  };
  // LOCAL STORAGE
  const setLocal = () => {
    localStorage.setItem('feedback', JSON.stringify(state.feedbacks));
  };
  return (
    <FeedbackContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        closeLoading,
        deleteFeedback,
        handleVoting,
        editFeedback,
        setLocal,
        closeAlert,

        closeError,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => {
  return useContext(FeedbackContext);
};
