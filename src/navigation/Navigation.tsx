import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StocksScreen from "../modules/stocks/screens/Stocks.screen";
import { createStaticNavigation } from "@react-navigation/native";
import StockDetailsScreen from "../modules/stocks/screens/StockDetails.screen";

const RootStack = createNativeStackNavigator({
    initialRouteName:"Stocks",
    screens: {
      Stocks:StocksScreen,
      StockDetails:StockDetailsScreen
    },
  });
  
const Navigation = createStaticNavigation(RootStack);

export default Navigation;
  