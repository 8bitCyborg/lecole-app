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
import { ScreenWrapper } from './drawer';

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import NotificationsScreen from '../screens/notifications';
import Dashboard from '../screens/dashboard';
import ClassRoom from '../screens/class';

const withScreenWrapper = (Component: React.ComponentType<any>, wrapperProps = {}) => {
  return (props: any) => (
    <ScreenWrapper {...wrapperProps}>
      <Component {...props} />
    </ScreenWrapper>
  );
};


// Wrapped screen components
const HomeScreenWrapper = () => (
  <ScreenWrapper>
    <HomeScreen />
  </ScreenWrapper>
);

const DashboardScreenWrapper = () => (
  <ScreenWrapper>
    <DashboardStackScreens />
  </ScreenWrapper>
);

const NotificationsScreenWrapper = () => (
  <ScreenWrapper>
    <NotificationsScreen />
  </ScreenWrapper>
);

const ProfileScreenWrapper = () => (
  <ScreenWrapper headerStyle={{ backgroundColor: colors.blue }}>
    <ProfileScreen />
  </ScreenWrapper>
);

const DashboardStack = createStackNavigator();
const DashboardStackScreens = () => {
  return (
    <DashboardStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={routenames.Dashboard}>
      <DashboardStack.Screen name={routenames.Dashboard} component={Dashboard} />
      <DashboardStack.Screen name={routenames.ClassRoom} component={ClassRoom} />
    </DashboardStack.Navigator>
  );
};

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
        component={HomeScreenWrapper} 
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
        component={DashboardScreenWrapper} 
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
        component={NotificationsScreenWrapper} 
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
        component={ProfileScreenWrapper} 
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
