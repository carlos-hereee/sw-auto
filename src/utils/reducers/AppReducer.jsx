const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const loadContent = (state, action) => {
  return {
    ...state,
    isLoading: false,
    socials: action.payload.socials,
    about: action.payload.about,
    services: action.payload.services,
    schedule: action.payload.schedule,
  };
};
const loadCarAssets = (state, action) => {
  return {
    ...state,
    isLoading: false,
    lot: action.payload,
  };
};
const updateMenu = (state, action) => {
  return {
    ...state,
    isLoading: false,
    menu: state.menu.map((m) => {
      if (m.name === "booking") {
        return { ...m, notification: action.payload.servicesCount };
      } else if (m.name === "checkout") {
        return {
          ...m,
          notification: action.payload.accessoryCount + action.payload.servicesCount,
        };
      } else return m;
    }),
  };
};
const updateBurger = (state, action) => {
  return {
    ...state,
    isLoading: false,
    burger: action.payload,
  };
};
const selectPaymentType = (state, action) => {
  return {
    ...state,
    isLoading: false,
    paymentType: action.payload,
  };
};
const updateSelected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    selected: action.payload,
  };
};
const resetSelect = (state, action) => {
  return {
    ...state,
    isLoading: false,
    selected: {},
  };
};
const loadFilters = (state, action) => {
  return {
    ...state,
    isLoading: false,
    filters: action.payload,
    isFiltered: false,
  };
};
const updateFilter = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: true,
    activeFilter: !state.activeFilter.includes(action.payload)
      ? [...state.activeFilter, action.payload]
      : [...state.activeFilter],
  };
};
const updateActiveFilter = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: true,
    appliedFilters: !state.appliedFilters.includes(action.payload)
      ? [...state.appliedFilters, action.payload]
      : [...state.appliedFilters],
  };
};
const resetFilter = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: false,
    activeFilter: action.payload,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "UPDATE_MENU":
      return updateMenu(state, action);
    case "LOAD_CONTENT":
      return loadContent(state, action);
    case "LOAD_FILTERS":
      return loadFilters(state, action);
    case "LOAD_CAR_ASSETS":
      return loadCarAssets(state, action);
    case "UPDATE_BURGER":
      return updateBurger(state, action);
    case "SELECT_PAYMENT_TYPE":
      return selectPaymentType(state, action);
    case "UPDATE_SELECTED":
      return updateSelected(state, action);
    case "UPDATE_ACTIVE_FILTER":
      return updateActiveFilter(state, action);
    case "RESET_SELECTED":
      return resetSelect(state, action);
    case "UPDATE_FILTER":
      return updateFilter(state, action);
    case "RESET_FILTER":
      return resetFilter(state, action);

    default:
      return state;
  }
};
