import React from 'react';
import {SingleInputLabelBtn} from '../component';
import {variables} from '../utils';

const Login = (props) => {
  const [phone, setPhone] = React.useState('');
  const handleHeaderIconPress = () => {
    props.navigation.goBack();
  };
  const handlePhoneChangeText = (text) => {
    setPhone(text);
  };
  const handleLoginBtnOnPress = () => {
    props.navigation.navigate(variables.verifyScreen);
  };
  return (
    <>
      <SingleInputLabelBtn
        backBtnPress={handleHeaderIconPress}
        label={variables.loginScreen}
        inputLabel={variables.phone}
        inputPlaceHolder={variables.phonePlaceHolder}
        inputValue={phone}
        inputKeyboardType={variables.phoneKeyboardType}
        onChangeText={handlePhoneChangeText}
        btnLabel={variables.loginScreen}
        btnOnPress={handleLoginBtnOnPress}
      />
    </>
  );
};

export default Login;
