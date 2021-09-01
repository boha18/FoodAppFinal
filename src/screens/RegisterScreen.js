import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import ButtonApp from '../Component/ButtonApp';
import ButtonSocial from '../Component/ButtonSocial';
import FormeApp from '../Component/FormeApp';
import LogoText from '../Component/LogoText';
import {COLORS, icons, images, PADDING_OFFSET, SIZE} from '../constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const RegisterScreen = () => {
  const buttonWidth = (SIZE.width - PADDING_OFFSET.HORIZONTAL * 3) / 2;
  return (
    <View>
      <Image source={images.Background} style={styles.imageStyle}></Image>
      <View style={styles.subContainer}>
        <LogoText />
        <Text style={styles.title}> Sign Up For Free </Text>
        <View>
          <FormeApp placeholderText="User Name" iconSource={icons.profile} />
          <FormeApp placeholderText="Email" iconSource={icons.message} />
          <FormeApp
            placeholderText="Password"
            iconSource={icons.lock}
            password={true}
          />
          <View style={{paddingTop: 8, paddingBottom: 20}}>
            <View style={styles.ckeckFieldContainer}>
              <BouncyCheckbox
                size={20}
                fillColor={COLORS.greenColorDarker}
                unfillColor={COLORS.white}
                disableText={true}
                iconStyle={{borderColor: COLORS.greenColorDarker}}
                textStyle={styles.checkFieldText}
                onPress={isChecked => {}}
              />
              <Text style={styles.checkFieldText}> Keep Me Signed In</Text>
            </View>
            <View View style={styles.ckeckFieldContainer}>
              <BouncyCheckbox
                size={20}
                fillColor={COLORS.greenColorDarker}
                unfillColor={COLORS.white}
                disableText={true}
                iconStyle={{borderColor: COLORS.greenColorDarker}}
                textStyle={styles.checkFieldText}
                onPress={isChecked => {}}
              />
              <Text style={styles.checkFieldText}>
                Email Me About Special Prices
              </Text>
            </View>
          </View>
        </View>

        <ButtonApp text="Create Account" width={175} alignSelf="center" />
        <Text style={styles.haveAccountText}> already have an account </Text>
        <View style={{height: 20}}></View>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
  ckeckFieldContainer: {
    flexDirection: 'row',
    paddingTop: 12,
  },
  checkFieldText: {
    fontSize: SIZE.fontSizeS,
    lineHeight: 20,
    marginLeft: 8,
  },
  haveAccountText: {
    fontSize: SIZE.fontSizeS,
    color: COLORS.greenColorDarker,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
  },
});
