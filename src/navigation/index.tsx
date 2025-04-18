import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import routenames from "./routenames";
import Welcome from "../screens/auth";
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";
import { useDispatch, useSelector } from "react-redux";
import { resetAuth } from "../store/slices/authSlice";
import { persistor } from "../store";
import BottomTabs from "./bottomTabs";

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
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);   
  const dispatch = useDispatch();
  return isLoggedIn ? <BottomTabs /> : <AuthStackScreens />
}

export default NavigationIndex;