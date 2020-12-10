import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../utils';

const Input = ({label, keyboardType, onChangeText, value, placeHolder}) => {
  return (
    <View>
      <Text style={{color: colors.silverChalice}}>{label}</Text>
      <TextInput
        style={{
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: colors.silverChalice,
        }}
        placeholder={placeHolder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
