import createDataContext from "./createDataContext";
const priceReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state1;
  }
};

const increment = dispatch => {
  return price => {
    dispatch({ type: "increment", payload: price });
  };
};

const decrement = dispatch => {
  return price => {
    dispatch({ type: "decrement", payload: price });
  };
};

export const { Context, Provider } = createDataContext(
  priceReducer,
  { increment, decrement },
  { counter: 0 }
);
