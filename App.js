import { StyleSheet } from "react-native";
import MainScreen from "./components/MainSreen";
import Menu from "./components/Menu";
import Classroom from "./components/Classroom";
import RestaurantMR from "./components/RestaurantMR";
import RestaurantYJ from "./components/RestaurantYJ";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Classroom" component={Classroom} />
        <Stack.Screen name="RestaurantMR" component={RestaurantMR} />
        <Stack.Screen name="RestaurantYJ" component={RestaurantYJ} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
