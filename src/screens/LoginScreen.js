import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import ButtonApp from '../Component/ButtonApp';
import ButtonSocial from '../Component/ButtonSocial';
import FormeApp from '../Component/FormeApp';
import LogoText from '../Component/LogoText';
import {COLORS, icons, images, PADDING_OFFSET, SIZE} from '../constants';

const LoginScreen = () => {
  const buttonWidth = (SIZE.width - PADDING_OFFSET.HORIZONTAL * 3) / 2;
  return (
    <View>
      <Image source={images.Background} style={styles.imageStyle}></Image>
      <View style={styles.subContainer}>
        <LogoText />
        <Text style={styles.title}> Login to Your Account </Text>
        <View>
          <FormeApp placeholderText="Email" iconSource={icons.profile} />
          <FormeApp placeholderText="Password" iconSource={icons.lock} />
        </View>
        <View style={{paddingTop: 28}}>
          <Text style={styles.continueText}> Or Continue With </Text>
          <View style={styles.buttonsContainer}>
            <ButtonSocial
              iconSource={icons.facebook}
              text="Facebook"
              width={buttonWidth}
            />
            <ButtonSocial
              iconSource={icons.google}
              text="Google"
              width={buttonWidth}
            />
          </View>
        </View>
        <Text style={styles.forgetText}> Forget Your Password </Text>
        <ButtonApp text="Login" width={141} alignSelf="center" />
        <View style={{height: 50}}></View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    position: 'absolute',
    height: SIZE.height,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  imageStyle: {
    width: SIZE.width,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  forgetText: {
    fontSize: SIZE.fontSizeS,
    color: COLORS.greenColorDarker,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  continueText: {
    fontSize: SIZE.fontSizeS,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
