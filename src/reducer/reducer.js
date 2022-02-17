export const reducer = (state, action) => {
  if ((action.type = 'HANDLE_CHANGE')) {
    return {
      ...state,
      feedback: {
        ...state.feedback,
        [action.payload.name]: action.payload.value,
      },
    };
  }
  if ((action.type = 'HANDLE_SUBMIT')) {
    const newFeedBack = {
      id: new Date().getTime().toString(),
      feed: state.feedback.text,
    };
    return {
      ...state,
    };
  }

  return { ...state };
};
