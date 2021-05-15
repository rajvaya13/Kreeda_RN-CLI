import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import type {Node} from 'react';
import MainTabScreen from '../screens/MainTabScreen';

import {DrawerContent} from '../screens/DrawerContent';
import HealthTipsScreen from '../screens/HealthTipsScreen';
import {AuthContext1} from './AuthProvider';
import AddTournamentScreen from '../screens/AddTournamentScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import AboutUs from '../screens/AboutUs';
import AddTournament from '../screens/AddTournament';

const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen
        name="AddTournamentScreen"
        component={AddTournamentScreen}
      />
      <Drawer.Screen name="AddTournament" component={AddTournament} />
      <Drawer.Screen name="HealthTipsScreen" component={HealthTipsScreen} />
      <Drawer.Screen name="LeaderBoardScreen" component={LeaderBoardScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
}

export default AppStack;
