import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import QuickLoginScreen from "../screens/QuickLoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TempScreen from "../screens/TempScreen";

import StudioScreen from "../screens/StudioScreen";
import LikedScreen from "../screens/LikedScreen";
import MessageScreen from "../screens/MessageScreen";
import AttentionScreen from "../screens/AttentionScreen";
import NotificationScreen from "../screens/NotificationScreen";

import TabBar from "../components/TabBar";
import { activeTintColor, inactiveTintColor } from "../constants/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <TabBar {...props} />}
    tabBarOptions={{
      activeTintColor,
      inactiveTintColor,
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Temp" component={TempScreen} />
    <Tab.Screen name="Activity" component={ActivityScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator mode="card" headerMode="none">
    {/* <Stack.Screen
      name="Tab"
      component={TabNavigator}
      options={{
        gestureEnabled: false,
      }}
    /> */}
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        gestureEnabled: false,
      }}
    />
    <Stack.Screen
      name="QuickLogin"
      component={QuickLoginScreen}
      options={{
        gestureEnabled: false,
      }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        gestureEnabled: false,
      }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPasswordScreen}
      options={{
        gestureEnabled: false,
      }}
    />

    <Stack.Screen
      name="Tab"
      component={TabNavigator}
      options={{
        gestureEnabled: false,
      }}
    />
    <Stack.Screen name="Studio" component={StudioScreen} />
    <Stack.Screen name="Liked" component={LikedScreen} />
    <Stack.Screen name="Message" component={MessageScreen} />
    <Stack.Screen name="Attention" component={AttentionScreen} />
    <Stack.Screen name="Notification" component={NotificationScreen} />
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default Navigation;
