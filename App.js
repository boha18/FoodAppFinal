import React from 'react';
import {
  Text, StyleSheet, View, Image
} from 'react-native';
import ButtonApp from './src/Component/ButtonApp';
import LogoText from './src/Component/LogoText';
import TempScreen from './src/Component/TempScreen';

import { images } from './src/constants'
import BottomBar from './src/navigation/BottomBar';

import { SplashScreen } from './src/screens'




const App = () => {
  return (
    <TempScreen source={images.Welcome_1}
      title='Find Your Comfort Food Here' />
  )
}

export default App;