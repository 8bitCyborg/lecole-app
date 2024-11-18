import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routenames from "./routenames";
import Welcome from "../screens/auth";
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";

const isLoggedIn = false;
const AuthStack = createStackNavigator();

const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={routenames.Welcome}>
      <AuthStack.Screen name={routenames.Welcome} component={Welcome} />
      <AuthStack.Screen name={routenames.Login} component={Login}/>
      <AuthStack.Screen name={routenames.SignUp} component={SignUp}/>
    </AuthStack.Navigator>
  );
};

const NavigationIndex = () => {
  return isLoggedIn ? <></> : <AuthStackScreens />
}

export default NavigationIndex;