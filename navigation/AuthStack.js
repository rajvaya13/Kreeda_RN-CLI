/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import type {Node} from 'react';
import MainTabScreen from '../screens/MainTabScreen';

import {DrawerContent} from '../screens/DrawerContent';
import HealthTipsScreen from '../screens/HealthTipsScreen';

import {AuthContext} from '../components/context';

import RootStackScreen from '../screens/RootStackScreen';
import react from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useEffect} from 'react';

function AuthStack() {
  return <RootStackScreen />;
}

export default AuthStack;
