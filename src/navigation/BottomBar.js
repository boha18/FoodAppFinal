import React from 'react';
import {
    Text,
} from 'react-native';

import { SplashScreen, HomeScreen } from '../screens';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const navigBar = createBottomTabNavigator();

const BottomBar = () => {
    return (
        <NavigationContainer>
            <navigBar.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SplashScreen'}>
                <navigBar.Screen name="HomeScreen" component={HomeScreen} />
                <navigBar.Screen name="SplashScreen" component={SplashScreen} />
            </navigBar.Navigator>
        </NavigationContainer>
    )
}

export default BottomBar;