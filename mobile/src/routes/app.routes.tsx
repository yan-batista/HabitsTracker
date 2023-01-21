import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Home from "../Screens/Home";
import New from "../Screens/New";
import Habit from "../Screens/Habit";

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home}></Screen>
      <Screen name="new" component={New}></Screen>
      <Screen name="habit" component={Habit}></Screen>
    </Navigator>
  );
};

export default AppRoutes;
