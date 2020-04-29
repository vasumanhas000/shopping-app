import createDataContext from "./createDataContext";

const itemReducer = (state, action) => {
  switch (action.type) {
    case "add_item":
      return [...state, action.payload];

    case "delete_item":
      return state.filter(item => item != action.payload);

    default:
      return state;
  }
};

const addItem = dispatch => {
  return (item, callback) => {
    dispatch({ type: "add_item", payload: item });
    callback();
  };
};

const deleteItem = dispatch => {
  return item => {
    dispatch({ type: "delete_item", payload: item });
  };
};

export const { Context, Provider } = createDataContext(
  itemReducer,
  { addItem, deleteItem },
  []
);
