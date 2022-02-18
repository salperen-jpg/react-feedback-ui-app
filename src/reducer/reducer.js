export const reducer = (state, action) => {
  if (action.type === 'HANDLE_CHANGE') {
    const { name, value } = action.payload;
    return {
      ...state,
      feedback: {
        ...state.feedback,
        [name]: value,
      },
    };
  }
  if (action.type === 'HANDLE_SUBMIT') {
    const newFeedBack = {
      id: new Date().getTime().toString(),
      feed: state.feedback.feed,
    };
    return {
      ...state,
      isLoading: true,
      feedbacks: [...state.feedbacks, newFeedBack],
      feedback: {
        feed: '',
      },
    };
  }
  if (action.type === 'CLOSE_LOADING') {
    return { ...state, isLoading: false };
  }
  if (action.type === 'DELETE_FEEDBACK') {
    const newFeedbacks = state.feedbacks.filter(
      (feedback) => feedback.id !== action.payload
    );
    return { ...state, feedbacks: newFeedbacks, isLoading: true };
  }

  return { ...state };
};
