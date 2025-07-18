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

import { ScreenWrapper } from "./drawer";
import BottomTabs from "./bottomTabs";

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import NotificationsScreen from '../screens/notifications';
import Dashboard from '../screens/dashboard';
import ClassRoom from "../screens/class";

const withScreenWrapper = (Component: React.ComponentType<any>, wrapperProps = {}) => {
  return (props: any) => (
    <ScreenWrapper {...wrapperProps}>
      <Component {...props} />
    </ScreenWrapper>
  );
};

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

const LoggedInStack = createStackNavigator();
export const LoggedInScreens = () => {
  return (
    <LoggedInStack.Navigator screenOptions={{ headerShown: false}}>
      <LoggedInStack.Screen name="main" component={BottomTabs} />
      <LoggedInStack.Screen name={routenames.Home} component={HomeScreen} />
      <LoggedInStack.Screen name={routenames.Dashboard} component={Dashboard} />
      <LoggedInStack.Screen name={routenames.Notifications} component={NotificationsScreen} />
      <LoggedInStack.Screen name={routenames.Profile} component={ProfileScreen} />
      <LoggedInStack.Screen name={routenames.ClassRoom} component={ClassRoom} />
    </LoggedInStack.Navigator>
  );
};

const wrappedStack = withScreenWrapper(LoggedInScreens);

const NavigationIndex = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);   
  const dispatch = useDispatch();
  return isLoggedIn ? <ScreenWrapper><LoggedInScreens /></ScreenWrapper> : <AuthStackScreens />
}

export default NavigationIndex;