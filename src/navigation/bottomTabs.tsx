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
import SchoolScreen from '../screens/school';
import CreateSchoolScreen from '../screens/school/createSchool';

// Create a wrapper component for each screen to add the header with menu button
const ScreenWrapper = ({ children, title }: { children: React.ReactNode; title: string }) => {
  const navigation = useNavigation();
  const drawerRef = React.useRef<DrawerLayout>(null);

  return (
    <DrawerLayout
      ref={drawerRef}
      drawerWidth={280}
      drawerPosition="left"
      drawerType="front"
      drawerBackgroundColor={colors.blue}
      renderNavigationView={() => <DrawerContent navigation={navigation} closeDrawer={() => drawerRef.current?.closeDrawer()} />}
    >
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        {/* Header with Menu Button */}
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          paddingHorizontal: 20, 
          paddingTop: 50, 
          paddingBottom: 15,
          backgroundColor: colors.blue
        }}>
          <TouchableOpacity
            onPress={() => drawerRef.current?.openDrawer()}
            style={{ marginRight: 15 }}
          >
            <Icon name="menu" type="material-icon" size={30} color={colors.white} />
          </TouchableOpacity>
          <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold' }}>
            {title}
          </Text>
        </View>
        {children}
      </View>
    </DrawerLayout>
  );
};

// Wrapped screen components
const HomeScreenWrapper = () => (
  <ScreenWrapper title="Dashboard">
    <HomeScreen />
  </ScreenWrapper>
);

const SchoolScreenWrapper = () => (
  <ScreenWrapper title="School">
    <SchoolStackScreens />
  </ScreenWrapper>
);

const NotificationsScreenWrapper = () => (
  <ScreenWrapper title="Notifications">
    <NotificationsScreen />
  </ScreenWrapper>
);

const ProfileScreenWrapper = () => (
  <ScreenWrapper title="Profile">
    <ProfileScreen />
  </ScreenWrapper>
);

const SchoolStack = createStackNavigator();
const SchoolStackScreens = () => {
  return (
    <SchoolStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={routenames.School}>
      <SchoolStack.Screen name={routenames.School} component={SchoolScreen} />
      <SchoolStack.Screen name={routenames.CreateSchool} component={CreateSchoolScreen} />
    </SchoolStack.Navigator>
  );
};

type BottomTabParamList = {
  Home: undefined;
  School: undefined;
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
            ? { display: 'none' }
            : defaultTabBarStyle,
        })}
      />
      <Tab.Screen 
        name="School" 
        component={SchoolScreenWrapper} 
        options={({ navigation, route }) => ({
          tabBarIcon: ({ focused }) => (
            <Icon 
              type="material-icon" 
              name="school" 
              color={focused ? colors.blue : colors.white} 
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
            ? { display: 'none' }
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
            ? { display: 'none' }
            : defaultTabBarStyle,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
