import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default class NavigationTab extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }
}
