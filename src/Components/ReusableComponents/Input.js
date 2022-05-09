import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {createBox, createText} from '@shopify/restyle';
import {
  TextInput as RNTextInput,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import {palette} from '../Theme/Index';
import {hp} from '../Helpers/responsive-ratio';
const {width} = Dimensions.get('window');
const Box = createBox();
const Text = createText();
const TextInputBase = createBox(RNTextInput);
import InputError from './InputError';

const Input = ({
  onChangeText,
  value,
  title,
  showErrorField,
  errorText,
  right,
  left,
  style,
  ...props
}) => {
  return (
    <Box>
      <Text style={[styles.title, props.titleStyle]}>{title}</Text>

      <TextInputBase
        {...props}
        style={[
          {
            backgroundColor: showErrorField ? 'white' : palette.tertiary,
          },
          styles.input,
          style,
        ]}
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
        }}
      />
      {/* {left() ? (
        <Box position="absolute" style={styles.left}>
          {left()}
        </Box>
      ) : null} */}
      {right() ? (
        <Box position="absolute" style={styles.right}>
          {right()}
        </Box>
      ) : null}
      {showErrorField ? (
        <Box mr="l" style={styles.error}>
          <InputError message={errorText} error={showErrorField} />
        </Box>
      ) : null}
    </Box>
  );
};
export default Input;

Input.propTypes = {
  title: PropTypes.string,
  right: PropTypes.func,
  left: PropTypes.func,

  renderLeft: PropTypes.func,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

Input.defaultProps = {
  title: '',
  showErrorField: false,
  onChangeText: () => {},
  right: () => {},
  left: () => {},

  value: '',
  style: {},
};

const styles = StyleSheet.create({
  error: {
    justifyContent: 'center',
    marginTop: 5,
    alignItems: 'flex-end',
  },
  right: {right: 10, top: 38},
  left: {left: 20, top: Platform.OS === 'ios' ? hp(0.2) : hp(2)},

  title: {marginBottom: 0},
  input: {
    paddingLeft: 10,
    // marginHorizontal: 20,
    height: 48,
    width: width - 150,
    borderRadius: 10,
  },
});
