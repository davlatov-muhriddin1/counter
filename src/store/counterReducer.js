import { createStore } from "redux";

let initialState = { count: 0, toggle: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        toggle: (state.toggle = true),
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
        toggle: (state.toggle = false),
      };
    case "RESET":
      return {
        count: (state.count = 0),
        toggle: (state.toggle = false),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
