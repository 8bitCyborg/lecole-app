import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import routenames from "./routenames";
import Welcome from "../screens/auth";
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";
import { useDispatch, useSelector } from "react-redux";
import { resetAuth } from "../store/slices/authSlice";

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
  return isLoggedIn ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
    <Text> Logged In</Text>
    <TouchableOpacity onPress={() => dispatch(resetAuth())}>
      <Text>Logout</Text>
    </TouchableOpacity>
  </View> : <AuthStackScreens />
}

export default NavigationIndex;