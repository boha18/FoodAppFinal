import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS, constantsComponent, images, SIZE} from '../constants';
import DropShadow from 'react-native-drop-shadow';
import ButtonApp from '../Component/ButtonApp';

const BioFillScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={images.Background_2} style={styles.imageStyle}></Image>
      <View style={styles.upperContaiber}>
        {/* Back button  */}
        <View style={styles.backButtonContainer}>
          <Icon
            name="chevron-left"
            size={25}
            color={COLORS.secondaryColor}
            style={{position: 'absolute'}}
          />
          <TouchableOpacity style={styles.backButton} />
        </View>
        {/* Ttile */}
        <View style={{paddingVertical: 20}}>
          <Text style={styles.titleStyle}>
            Hello word tu*itle l'st make it Bigger than i feal i
          </Text>
          <Text style={styles.subTitleStyle}>
            Detaills testttttt soeme text here e e e e
          </Text>
        </View>
        {/* Simple Form Creation 
                  <TextInput
            style={styles.InputStyle}
            placeholderTextColor={COLORS.placeHolderColor}
            placeholder={'hellow '}
          /> */}
        <View
          style={{
            justifyContent: 'space-between',
            height: 211,
          }}>
          <DropShadow style={styles.shadowStyle}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.InputStyle}
                placeholderTextColor={COLORS.placeHolderColor}
                placeholder={'First Name'}
              />
            </View>
          </DropShadow>
          <DropShadow style={styles.shadowStyle}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.InputStyle}
                placeholderTextColor={COLORS.placeHolderColor}
                placeholder={'First Name'}
              />
            </View>
          </DropShadow>
          <DropShadow style={styles.shadowStyle}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.InputStyle}
                placeholderTextColor={COLORS.placeHolderColor}
                placeholder={'First Name'}
              />
            </View>
          </DropShadow>
        </View>
        {/* Button App */}
        <ButtonApp
          text="Next"
          width={157}
          alignSelf="center"
          style={{marginTop: 'auto'}}
        />
      </View>
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
  upperContaiber: {
    justifyContent: 'space-between',
    height: SIZE.height,
    width: SIZE.width,
    position: 'absolute',
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
  backButtonContainer: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    height: 45,
    width: 45,
    backgroundColor: COLORS.buttonBackgroundColor,
    borderRadius: 15,
    opacity: 0.1,
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitleStyle: {
    fontSize: SIZE.fontSizeS,
    paddingTop: 19,
  },
  shadowStyle: {
    height: 57,
    shadowColor: COLORS.shadowColor,
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  inputContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    height: 57,
    borderRadius: 22,
    backgroundColor: COLORS.white,
  },
  InputStyle: {
    marginLeft: 20,
  },
});

{
  /*     borderRadius: 22,
    
    backgroundColor: COLORS.white,
    shadowColor: COLORS.shadowColor,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    backgroundColor: 'red', */
}
