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
import SportScreen from '../screens/SportScreen';
import BadmintonScreen from '../screens/BadmintonScreen';
import GameScreen from '../screens/GameScreen';

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
      <Drawer.Screen name="SportScreen" component={SportScreen} />
      <Drawer.Screen name="HealthTipsScreen" component={HealthTipsScreen} />
      <Drawer.Screen name="LeaderBoardScreen" component={LeaderBoardScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="BadmintonScreen" component={BadmintonScreen} />
      <Drawer.Screen name="GameScreen" component={GameScreen} />
    </Drawer.Navigator>
  );
}

export default AppStack;
