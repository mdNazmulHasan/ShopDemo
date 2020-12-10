import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {Header, Input} from '../component';
import {variables, colors} from '../utils';
import {leftArrowIcon} from '../../assets';

const Login = (props) => {
  const [phone, setPhone] = React.useState('');
  const handleHeaderIconPress = () => {
    console.log('back');
    props.navigation.goBack();
  };
  const handlePhoneChangeText = (text) => {
    setPhone(text);
  };
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 20}}>
          <Header icon={leftArrowIcon} onPress={handleHeaderIconPress} />
          <Text style={{fontSize: 30, color: colors.black, marginVertical: 30}}>
            Login
          </Text>
          <Input
            label="Phone"
            placeHolder="Enter your phone number"
            value={phone}
            keyboardType="phone-pad"
            onChangeText={handlePhoneChangeText}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
