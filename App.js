import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailScreen";
import CartScreen from "./src/screens/CartScreen";
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

export default createAppContainer(navigator);
