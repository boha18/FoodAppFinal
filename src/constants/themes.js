import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primaryColor: '#FFAD1D',
  primaryColor_1: '#FFC668',
  primaryColor_2: '#FFDEA4',
  primaryColor_3: '#FEF8E0',

  secondaryColor: '#DA6317',
  secondaryColor_1: '#E38751',
  secondaryColor_2: '#E6A986',
  secondaryColor_3: '#E3CBBC',

  greenColorLighter: '#53E88B',
  greenColorDarker: '#15BE77',

  Black: '#09051C',
  Black_1: '#444352',
  Black_2: '#86848F',
  Black_3: '#CECDD2',

  white: '#FFFFFF',
  borderColor: '#F4F4F4',
  placeHolderColor: '#3B3B3B',

  shadowColor: '#5A6CEA',
  backgroundColor: '#FEFEFF',
  buttonBackgroundColor: '#F9A84D',
};

export const SIZE = {
  fontSizeXXL: 64,
  fontSizeXL: 48,
  fontSizeL: 40,
  fontSizeM: 32,
  fontSizeS: 13,

  buttonSmall: 157,
  buttonMedium: 175,

  width,
  height,
};

export const FONTS = {
  Viga: 'Viga-Regular',
  Inter: 'Inter-SemiBold',
};

export const PADDING_OFFSET = {
  HORIZONTAL: 20,
  VERTICAL: 20,
  betweenForms: 12,
  betweenButtons: 20,
};

export const constantsComponent = {
  maxFormWidth: 400,
  fromHeight: 58,
  buttonHeight: 73,
  shadowProp: {
    shadowColor: COLORS.shadowColor,
    shadowOffset: {width: 12, height: 26},
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
};
