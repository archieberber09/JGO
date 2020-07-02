import React from 'react';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from '../modules/auth/LoginPage'
import RegisterPage from '../modules/auth/RegisterPage'


const Stack = createStackNavigator();

export const AuthNavigator = () => (
    <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginPage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterPage}
      options={{ headerShown: false }}
    />
    </Stack.Navigator>
  );