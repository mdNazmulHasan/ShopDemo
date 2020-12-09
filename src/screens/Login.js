import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {Header} from '../component';
import {variables, colors} from '../utils';
import {leftArrowIcon} from '../../assets';

const Login = (props) => {
  const handleHeaderIconPress = () => {
    console.log('back');
    props.navigation.goBack();
  };
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 20}}>
          <Header icon={leftArrowIcon} onPress={handleHeaderIconPress} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
