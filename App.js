import React from 'react';
import {
  Text, StyleSheet, View, Image
} from 'react-native';
import ButtonApp from './src/Component/ButtonApp';
import LogoText from './src/Component/LogoText';

import { images } from './src/constants'
import BottomBar from './src/navigation/BottomBar';

import { SplashScreen } from './src/screens'




const App = () => {
  return (
    <ButtonApp />
  )
}

export default App;