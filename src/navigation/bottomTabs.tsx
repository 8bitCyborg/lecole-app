import React from 'react';
import { Dimensions, View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { DrawerLayout } from 'react-native-gesture-handler';
import colors from '../utils/colors';
import Icon from '@rneui/themed/dist/Icon';
import routenames from './routenames';
import DrawerContent from './drawer';

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import NotificationsScreen from '../screens/notifications';
import Dashboard from '../screens/dashboard';

type BottomTabParamList = {
  Home: undefined;
  Dashboard: undefined;
  Notifications: undefined;
  Search: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
const defaultTabBarStyle = {
  backgroundColor: colors.blue,
  position: 'absolute' as const,
  height: Dimensions.get('screen').height * 0.1,
  width: Dimensions.get('screen').width * 0.99,
  alignSelf: 'center',
  marginLeft: 2,
  bottom: 0,
  borderRadius: 20,
  paddingTop: 15,
} as const;

const focusedTabStyle = {
  borderWidth: 1,
  borderColor: colors.white, 
  backgroundColor: colors.white,
  borderRadius: 5,
} as const;

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: defaultTabBarStyle,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.gray,
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ navigation, route }) => ({
          tabBarIcon: ({ focused }) => (
            <Icon 
              type="material-icon" 
              name="home" 
              color={focused ? colors.blue : colors.white} 
              style={focused ? focusedTabStyle : {}}
              size={30}
            />
          ),
          tabBarItemStyle: {},
          tabBarStyle: (navigation.getState().routes[1].state?.index ?? 0) > 0
            ? defaultTabBarStyle
            : defaultTabBarStyle,
        })}
      />
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={({ navigation, route }) => ({
          tabBarIcon: ({ focused }) => (
            <Icon 
              type="material-community" 
              name="view-dashboard" 
              color={focused ? colors.blue : colors.white} 
              style={focused ? focusedTabStyle : {}}
              size={25}
            />
          ),
          tabBarItemStyle: {},
          tabBarStyle: (navigation.getState().routes[1].state?.index ?? 0) > 0
            ? defaultTabBarStyle
            : defaultTabBarStyle,
        })}
      />
      <Tab.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={({ navigation, route }) => ({
          tabBarIcon: ({ focused }) => (
            <Icon 
              type="material-icon" 
              name="notifications" 
              color={focused ? colors.blue : colors.white} 
              style={focused ? focusedTabStyle : {}}
              size={30}
            />
          ),
          tabBarItemStyle: {},
          tabBarStyle: (navigation.getState().routes[1].state?.index ?? 0) > 0
            ? defaultTabBarStyle
            : defaultTabBarStyle,
        })}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={({ navigation, route }) => ({
          tabBarIcon: ({ focused }) => (
            <Icon 
              type="material-icon" 
              name="person" 
              color={focused ? colors.blue : colors.white} 
              style={focused ? focusedTabStyle : {}}
              size={30}
            />
          ),
          tabBarItemStyle: { marginTop: 5 },
          tabBarStyle: (navigation.getState().routes[1].state?.index ?? 0) > 0
            ? {  }
            : defaultTabBarStyle,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
