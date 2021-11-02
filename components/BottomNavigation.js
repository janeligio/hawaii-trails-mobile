import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}
