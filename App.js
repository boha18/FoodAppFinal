import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import ButtonApp from './src/Component/ButtonApp';
import ButtonSocial from './src/Component/ButtonSocial';
import FormeApp from './src/Component/FormeApp';
import LogoText from './src/Component/LogoText';
import TempScreen from './src/Component/TempScreen';

import {COLORS, icons, images, SIZE} from './src/constants';
import BottomBar from './src/navigation/BottomBar';

import {
  BioFillScreen,
  LoginScreen,
  RegisterScreen,
  SplashScreen,
  WelcomeScreenSecond,
} from './src/screens';
import WelcomeScreenFirst from './src/screens/WelcomeScreenFirst';

import DropShadow from 'react-native-drop-shadow';

const App = () => {
  return <BioFillScreen> </BioFillScreen>;
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    shadowColor: '#000',
    elevation: 66,
  },
});

export default App;
