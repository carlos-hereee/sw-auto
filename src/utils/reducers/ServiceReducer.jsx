const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const updateSelected = () => {
  return {
    ...state,
    isLoading: false,
    selected: action.payload,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "UPDATE_SELECTED":
      return updateSelected(state, action);

    default:
      return state;
  }
};
