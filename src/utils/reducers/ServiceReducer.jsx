const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    default:
      return state;
  }
};
