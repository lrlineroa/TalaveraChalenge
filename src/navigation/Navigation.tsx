import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StocksScreen from "../modules/stocks/screens/Stocks.screen";
import { createStaticNavigation } from "@react-navigation/native";

const RootStack = createNativeStackNavigator({
    initialRouteName:"Stocks",
    screens: {
      Stocks:StocksScreen,
    },
  });
  
const Navigation = createStaticNavigation(RootStack);

export default Navigation;
  