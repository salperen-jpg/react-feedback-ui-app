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
} from './actions';
export const reducer = (state, action) => {
  // HANDLE_CHANGE
  if (action.type === HANDLE_CHANGE) {
    const { name, value } = action.payload;
    return {
      ...state,
      feedback: {
        ...state.feedback,
        [name]: value,
      },
    };
  }
  // HANDLE SUBMIT
  if (action.type === HANDLE_SUBMIT) {
    const newFeedBack = {
      id: new Date().getTime().toString(),
      vote: state.feedback.vote,
      feed: state.feedback.feed,
    };
    return {
      ...state,
      isLoading: true,
      feedbacks: [...state.feedbacks, newFeedBack],
      feedback: {
        feed: '',
        vote: '',
      },
      isAlert: {
        show: true,
        msg: 'Feedback added successfully.',
        status: 'success',
      },
    };
  }
  // CLOSE_LOADING
  if (action.type === CLOSE_LOADING) {
    return { ...state, isLoading: false };
  }
  // CLOSE_ALERT
  if (action.type === CLOSE_ALERT) {
    return { ...state, isAlert: false };
  }
  // TOOGLE_ERROR
  if (action.type === TOGGLE_ERROR) {
    return { ...state, isError: true };
  }
  // CLOSE_ERROR
  if (action.type === CLOSE_ERROR) {
    return { ...state, isError: false };
  }
  // DELETE FEEDBACK
  if (action.type === DELETE_FEEDBACK) {
    const newFeedbacks = state.feedbacks.filter(
      (feedback) => feedback.id !== action.payload
    );
    return {
      ...state,
      feedbacks: newFeedbacks,
      isLoading: true,
      isAlert: {
        show: true,
        msg: 'Feedback deleted successfully.',
        status: 'danger',
      },
    };
  }
  // SET RATE
  if (action.type === SET_RATE) {
    return {
      ...state,
      feedback: {
        ...state.feedback,
        vote: action.payload,
      },
    };
  }
  // START EDITING
  if (action.type === START_EDIT) {
    const editingItem = state.feedbacks.find(
      (feedback) => feedback.id === action.payload
    );
    return {
      ...state,
      isEditing: true,
      editingID: editingItem.id,
      feedback: {
        vote: editingItem.vote,
        feed: editingItem.feed,
      },
    };
  }
  // FINISH EDIT
  if (action.type === FINISH_EDIT) {
    return {
      ...state,
      feedbacks: state.feedbacks.map((feedback) => {
        if (feedback.id === state.editingID) {
          console.log(feedback);
          return {
            ...feedback,
            vote: state.feedback.vote,
            feed: state.feedback.feed,
          };
        }
        return feedback;
      }),
      editingID: null,
      isEditing: false,
      feedback: {
        vote: null,
        feed: '',
      },
      isAlert: {
        show: true,
        msg: 'Feedback edited successfully.',
        status: 'success',
      },
    };
  }
  // DEFAULT RETURN
  return { ...state };
};
