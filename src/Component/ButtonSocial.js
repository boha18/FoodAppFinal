import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {COLORS, constantsComponent} from '../constants';

const ButtonSocial = ({text, iconSource, height, width}) => {
  return (
    <DropShadow style={constantsComponent.shadowProp}>
      <TouchableOpacity
        style={[
          styles.container,
          height && {height: height},
          width && {width: width},
        ]}>
        <Image source={iconSource} style={styles.imageStyle} />
        {text && <Text style={styles.textStyle}> {text} </Text>}
      </TouchableOpacity>
    </DropShadow>
  );
};

export default ButtonSocial;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    height: constantsComponent.fromHeight,
    maxWidth: constantsComponent.maxFormWidth,
  },
  imageStyle: {},
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
