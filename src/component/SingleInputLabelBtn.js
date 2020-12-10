import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {leftArrowIcon} from '../../assets';
import {colors} from '../utils';
import Button from './Button';
import Header from './Header';
import Input from './Input';

const SingleInputLabelBtn = ({
  backBtnPress,
  label,
  inputLabel,
  inputPlaceHolder,
  inputValue,
  inputKeyboardType,
  onChangeText,
  btnLabel,
  btnOnPress,
}) => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.innerContainerStyle}>
        <Header icon={leftArrowIcon} onPress={backBtnPress} />
        <Text style={styles.labelTextStyle}>{label}</Text>
        <Input
          label={inputLabel}
          placeHolder={inputPlaceHolder}
          value={inputValue}
          keyboardType={inputKeyboardType}
          onChangeText={onChangeText}
        />
        <Button
          label={btnLabel}
          onPress={btnOnPress}
          containerStyle={styles.btnContainerStyle}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerStyle: {flex: 1},
  innerContainerStyle: {flex: 1, padding: 20},
  labelTextStyle: {fontSize: 30, color: colors.black, marginVertical: 30},
  btnContainerStyle: {
    paddingHorizontal: 150,
    marginVertical: 100,
  },
});

export default SingleInputLabelBtn;
