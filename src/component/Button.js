import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../utils';

const Button = ({onPress, label}) => {
  return (
    <TouchableOpacity style={styles.btnContainerStyle} onPress={onPress}>
      <Text style={styles.btnTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: colors.cornFlowerBlue,
    alignSelf: 'center',
    paddingHorizontal: 80,
    paddingVertical: 10,
    borderRadius: 6,
  },
  btnTextStyle: {fontSize: 15, color: colors.white},
});
