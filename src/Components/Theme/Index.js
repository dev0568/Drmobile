import {createTheme} from '@shopify/restyle';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const size = {
  //Primary
  width: width,
  height: height,
};
export const palette = {
  //Primary
  primary: '#ee7297',
  primary1: '#6cb9d6',

  //Black Shade
  blackshade: '#1a1a1a',

  // Secondary
  secondary: '#CED4FD',
  secondary1: '#F5F6FF',
  secondary2: '#E0E0FD',

  //Tertiary
  tertiary: '#F4F5F7',
  tertiary1: '#CCCCD5',

  //Supporting colos
  support: '#172B3D',
  support1: '#212121',
  support2: '#0F0250',
};

export const TypographyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card: {
    minHeight: 175,
    backgroundColor: 'white',
    borderRadius: 25,
    marginHorizontal: 30,
  },
});
export const fonts = {
  bold: 'Montserrat-Bold',
  medium: 'Montserrat-Medium',
  thin: 'Montserrat-Thin',
  thinitalic: 'Montserrat-ThinItalic',
  mediumItalic: 'Montserrat-MediumItalic',
  regular: 'Montserrat-Regular',
  italicLight: 'Montserrat-LightItalic',
  italicBlack: 'Montserrat-BlackItalic',
  boldItalic: 'Montserrat-BoldItalic',
  italic: 'Montserrat-Italic',
  black: 'Montserrat-Black',
  semibold: 'Montserrat-SemiBold',
};

const theme = createTheme({
  colors: {
    white: 'white',
    black: 'black',
    //Primary
    primary: '#ee7297',
    primary1: '#6cb9d6',

    // Black shade
    blackshade: '#1a1a1a',

    // Secondary
    secondary: 'secondary',
    secondary1: 'secondary1',
    secondary2: 'secondary2',

    //Tertiary
    tertiary: 'tertiary',
    tertiary1: 'tertiary1',

    //Supporting colos
    support: 'support',
    support1: 'support1',
    support2: 'support2',
  },
  spacing: {
    s: 5,
    m: 10,
    l: 20,
    xl: 25,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    // 20
    primary20bold: {
      color: 'primary',
      fontFamily: fonts.bold,
      fontSize: 20,
    },
    // 16
    white16Medium: {
      color: 'white',
      fontFamily: fonts.medium,
      fontSize: 16,
    },
    primary115Medium: {
      color: 'primary1',
      fontFamily: fonts.medium,
      fontSize: 15,
    },
    primary16Regular: {
      color: 'primary',
      fontFamily: fonts.medium,
      fontSize: 16,
    },
    blackshade30Bold: {
      color: 'blackshade',
      fontFamily: fonts.bold,
      fontSize: 30,
    },
  },
});

export type Theme = typeof theme;
export default theme;
