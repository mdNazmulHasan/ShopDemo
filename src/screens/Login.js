import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {Header, Input} from '../component';
import {variables, colors} from '../utils';
import {leftArrowIcon} from '../../assets';
import Button from '../component/Button';

const Login = (props) => {
  const [phone, setPhone] = React.useState('');
  const handleHeaderIconPress = () => {
    props.navigation.goBack();
  };
  const handlePhoneChangeText = (text) => {
    setPhone(text);
  };
  const handleLoginBtnOnPress = () => {
    console.log('login');
  };
  return (
    <>
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.innerContainerStyle}>
          <Header icon={leftArrowIcon} onPress={handleHeaderIconPress} />
          <Text style={styles.labelTextStyle}>{variables.loginScreen}</Text>
          <Input
            label={variables.phone}
            placeHolder={variables.phonePlaceHolder}
            value={phone}
            keyboardType={variables.phoneKeyboardType}
            onChangeText={handlePhoneChangeText}
          />
          <Button
            label={variables.loginScreen}
            onPress={handleLoginBtnOnPress}
            containerStyle={styles.btnContainerStyle}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerStyle: {flex: 1},
  innerContainerStyle: {flex: 1, padding: 20},
  labelTextStyle: {fontSize: 30, color: colors.black, marginVertical: 30},
  btnContainerStyle: {
    paddingHorizontal: 150,
    marginVertical: 100,
  },
});
