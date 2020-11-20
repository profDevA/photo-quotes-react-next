import * as types from "../types";

// COUNTER REDUCER
const initialState = {
  searchKey: "",
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_KEY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default searchReducer;
