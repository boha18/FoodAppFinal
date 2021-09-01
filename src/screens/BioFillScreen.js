import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS, images, SIZE} from '../constants';

const BioFillScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={images.Background_2} style={styles.imageStyle}></Image>
    </View>
  );
};

export default BioFillScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  imageStyle: {
    width: SIZE.width,
  },
});
