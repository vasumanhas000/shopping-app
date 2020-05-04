import createDataContext from "./createDataContext";

const priceReducer = (state, action) => {
  switch (action.type) {
    case "add_price":
      return { ...state, price: state.price + action.payload };
    case "delete_price":
      return { ...state, price: state.price - action.payload };
    default:
      return state;
  }
};

const addPrice = dispatch => {
  return p => {
    dispatch({ type: "add_price", payload: p });
  };
};

const deletePrice = dispatch => p => {
  return dispatch({ type: "delete_price", payload: p });
};

export const { Context, Provider } = createDataContext(
  priceReducer,
  { addPrice, deletePrice },
  { price: 0 }
);
