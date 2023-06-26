import { createStore } from "redux";

// Define initial state
const initialState = {
  username: "Window",
};

// Define reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

// Create the store
const store = createStore(rootReducer);

export default store;
