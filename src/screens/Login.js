import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import shop from '../../assets/shop.webp';
import colors from '../utils/colors';

const Login = () => {
  return (
    <>
      <SafeAreaView style={styles.containerStyle}>
        <Text style={styles.welcomeTextStyle}>Welcome to Bolt</Text>
        <Image source={shop} style={styles.brandImageStyle} />
        <View>
          <TouchableOpacity style={styles.loginBtnContainerStyle}>
            <Text style={styles.loginBtnTextStyle}>Login with phone</Text>
          </TouchableOpacity>
          <Text style={styles.shopTextStyle}>Shop with us</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerStyle: {flex: 1, justifyContent: 'space-between'},
  welcomeTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  brandImageStyle: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  loginBtnContainerStyle: {
    backgroundColor: colors.cornFlowerBlue,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  loginBtnTextStyle: {fontSize: 15, color: colors.white},
  shopTextStyle: {alignSelf: 'center', padding: 20, fontSize: 18},
});
