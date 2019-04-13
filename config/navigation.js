import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../src/components/home';
import ConGiap from '../src/components/congiap';
import CungHoangDao from '../src/components/cunghoangdao';


const Navigation = createStackNavigator(
    {
        home: Home,
        conGiap: ConGiap,
        cungHoangDao: CungHoangDao,
    },
    {
        initialRouteName: 'home',
    }
);
export const AppContainer = createAppContainer(Navigation);






