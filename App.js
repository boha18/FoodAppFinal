import React from 'react';
import {
  Text, StyleSheet, View, Image
} from 'react-native';
import ButtonApp from './src/Component/ButtonApp';
import ButtonSocial from './src/Component/ButtonSocial';
import FormeApp from './src/Component/FormeApp';
import LogoText from './src/Component/LogoText';
import TempScreen from './src/Component/TempScreen';

import { icons, images } from './src/constants'
import BottomBar from './src/navigation/BottomBar';

import { LoginScreen, SplashScreen, WelcomeScreenSecond } from './src/screens'
import WelcomeScreenFirst from './src/screens/WelcomeScreenFirst';




const App = () => {
  return (
    <LoginScreen></LoginScreen>
  )
}

export default App;