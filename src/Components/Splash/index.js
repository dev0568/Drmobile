import React, {useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
// import {size} from '../Theme';
import {Images} from '../../Constant/Image';
import {hp, wp} from '../Helpers/responsive-ratio';
import {palette} from '../Theme/Index';
const Box = createBox();

export default ({navigation, route}) => {
  /**
   * @function useEffect
   * @description Will change screen in 1.5 seconds
   */

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('NavigationStack');
    }, 1500);
  }, []);

  return (
    <Box
      flex={1}
      style={{backgroundColor: '#ee7297'}}
      // backgroundColor={'primary'}
      justifyContent="center"
      alignItems={'center'}>
      <Image
        source={Images.Splash_logo}
        style={styles.imageBackground}
        resizeMode="contain"
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    // height: size.height,

    width: wp(50),
    height: hp(15),
    // resizeMode: "stretch",
    // width: size.width,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
