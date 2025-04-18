import React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import colors from '../utils/colors';
import Icon from '@rneui/themed/dist/Icon';

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import NotificationsScreen from '../screens/notifications';

type BottomTabParamList = {
  Home: undefined;
  Notifications: undefined;
  Search: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
const defaultTabBarStyle = {
  backgroundColor: colors.black,
  position: 'absolute' as const,
  height: 100,
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
  borderRadius: 50, 
  backgroundColor: colors.white
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
              color={focused ? colors.black : colors.white} 
              style={focused ? focusedTabStyle : {}}
              size={30}
            />
          ),
          tabBarItemStyle: {},
          tabBarStyle: (navigation.getState().routes[1].state?.index ?? 0) > 0
            ? { display: 'none' }
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
              color={focused ? colors.black : colors.white} 
              style={focused ? focusedTabStyle : {}}
              size={30}
            />
          ),
          tabBarItemStyle: {},
          tabBarStyle: (navigation.getState().routes[1].state?.index ?? 0) > 0
            ? { display: 'none' }
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
              color={focused ? colors.black : colors.white} 
              style={focused ? focusedTabStyle: {}}
              size={30}
            />
          ),
          tabBarItemStyle: { marginTop: 5 },
          tabBarStyle: (navigation.getState().routes[1].state?.index ?? 0) > 0
            ? { display: 'none' }
            : defaultTabBarStyle,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
