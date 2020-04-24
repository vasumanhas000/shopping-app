import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import DetailsScreen from "./src/screens/DetailScreen";
import CartScreen from "./src/screens/CartScreen";
import { Provider } from "./src/context/CartContext";
const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    Details: DetailsScreen,
    Cart: CartScreen,
  },
  {
    initialRouteName: "Home",

    defaultNavigationOptions: {
      title: "Shopping App",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App></App>
    </Provider>
  );
};
