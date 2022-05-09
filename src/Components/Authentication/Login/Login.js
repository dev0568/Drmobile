import React, {useState, useEffect, useRef, useReducer} from 'react';
import {useDispatch} from 'react-redux';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import authConstants from '../../../Redux/AuthConstants';
import {Button, Input} from '../../ReusableComponents';
import {palette} from '../../Theme/Index';
import {fonts} from '../../Theme/Index';
import {Images} from '../../../Constant/Image';
import {hp, wp} from '../../Helpers/responsive-ratio';
const Box = createBox();
const Text = createText();
export default (props) => {
  const dispatch = useDispatch();

  const {navigation} = props;

  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      email: '',
      password: '',
      isError: false,
      responseError: '',
      errors: [],
      secure: true,
      loginLoader: false,
      loading: false,
    },
  );

  /**
   * @function onChangeText
   * @param {*} key
   * @param {*} value
   * @description it will set state for its key
   */
  const onChangeText = (key, value) => {
    setState({[key]: value});
  };

  const objName = (element) => element.name === 'email';
  const emailIndex = state.errors.findIndex(objName);
  const objPassword = (element) => element.name === 'password';
  const passwordIndex = state.errors.findIndex(objPassword);

  return (
    <Box
      flex={1}
      backgroundColor={'primary'}
      // justifyContent="center"
    >
      <ImageBackground
        source={Images.Circle_Pattern}
        style={{
          height: hp(45),
          width: wp(100),
          marginBottom: hp(-10),
          alignItems: 'center',
          justifyContent: 'center',
        }}
        resizeMode={'cover'}>
        <Image
          source={Images.Splash_logo}
          style={{height: hp(10), width: wp(50)}}
          resizeMode={'contain'}
        />
      </ImageBackground>
      <Box
        backgroundColor={'white'}
        flex={1}
        pt={'l'}
        paddingHorizontal={'xl'}
        borderTopLeftRadius={35}
        borderTopRightRadius={35}>
        <Text variant={'blackshade30Bold'}>Sign In</Text>
        <Input
          // title="Enter Staff Email address"
          style={{
            width: wp(100) - 50,
            height: hp(6.5),
            backgroundColor: '#fff',
            borderColor: palette.bordercolor,
            borderWidth: 1,
            // marginTop: hp(1),
            fontSize: hp(2.1),
          }}
          maxLength={10}
          keyboardType={'numeric'}
          autoCapitalize="none"
          autoComplete="off"
          value={state.email}
          onChangeText={(text) => {
            onChangeText('email', text);
          }}
          placeholder={'Phone number'}
          showErrorField={emailIndex !== -1 && !state.errors[emailIndex].valid}
          errorText={emailIndex !== -1 && state.errors[emailIndex].message}
          titleStyle={{
            fontFamily: fonts.medium,
            fontSize: hp(2),
            marginTop: hp(2),
            color: palette.textcolor,
          }}
        />
        <Input
          // title="Password"
          value={state.password}
          placeholder={'Password'}
          maxLength={36}
          style={{
            width: wp(100) - 50,

            height: hp(6.5),
            fontSize: hp(2.1),

            backgroundColor: '#fff',
            borderColor: palette.bordercolor,
            borderWidth: 1,
            marginTop: hp(-2),
          }}
          onChangeText={(text) => {
            onChangeText('password', text);
          }}
          right={() => {
            return (
              <TouchableOpacity
                onPress={() => setState({secure: !state.secure})}>
                <Box
                  justifyContent="center"
                  alignItems={'center'}
                  // style={{marginTop: hp()}}
                >
                  <Image
                    style={[
                      styles.eye,
                      {
                        tintColor: state.secure
                          ? palette.primary
                          : palette.bordercolor,
                      },
                    ]}
                    source={state.secure ? Images.ShowPass : Images.HidePass}
                  />
                </Box>
              </TouchableOpacity>
            );
          }}
          secureTextEntry={state.secure}
          showErrorField={
            passwordIndex !== -1 && !state.errors[passwordIndex].valid
          }
          errorText={
            passwordIndex !== -1 && state.errors[passwordIndex].message
          }
          titleStyle={{
            fontFamily: fonts.medium,
            fontSize: hp(2),
            marginTop: hp(2),
            color: palette.textcolor,
          }}
        />
        <TouchableOpacity
          style={{marginBottom: 20, marginTop: 5}}
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Box alignItems="flex-end">
            <Text variant={'primary115Medium'}>Forgot Password?</Text>
          </Box>
        </TouchableOpacity>
        <Box height={50} mt="xl" bottom={70} position="absolute">
          <Button
            label="Sign In"
            // onPress={() => login()}
            loading={state.loginLoader}
          />
        </Box>
        <Box
          flexDirection="row"
          alignSelf="center"
          mt="l"
          bottom={15}
          position="absolute">
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Signup');
            }}>
            <Text ml="s" variant="primary115Medium">
              Register now
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  eye: {height: 30, width: 30},
});
