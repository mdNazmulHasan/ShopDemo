import React from 'react';
import {SingleInputLabelBtn} from '../component';
import {variables} from '../utils';

const Verify = (props) => {
  const [otp, setOtp] = React.useState('');
  const handleHeaderIconPress = () => {
    props.navigation.goBack();
  };
  const handlePhoneChangeText = (text) => {
    setOtp(text);
  };
  const handleVerifyBtnPress = () => {
    props.navigation.navigate(variables.dashboardScreen);
  };
  return (
    <>
      <SingleInputLabelBtn
        backBtnPress={handleHeaderIconPress}
        label={variables.verifyScreen}
        inputLabel={variables.otp}
        inputPlaceHolder={variables.otpPlaceHolder}
        inputValue={otp}
        inputKeyboardType={variables.phoneKeyboardType}
        onChangeText={handlePhoneChangeText}
        btnLabel={variables.verifyScreen}
        btnOnPress={handleVerifyBtnPress}
      />
    </>
  );
};

export default Verify;
