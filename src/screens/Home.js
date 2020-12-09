import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import shop from '../../assets/shop.webp';
import colors from '../utils/colors';
import variables from '../utils/variables';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.containerStyle}>
        <Text style={styles.welcomeTextStyle}>{variables.welcomeText}</Text>
        <Image source={shop} style={styles.brandImageStyle} />
        <View>
          <TouchableOpacity style={styles.loginBtnContainerStyle}>
            <Text style={styles.loginBtnTextStyle}>
              {variables.loginBtnText}
            </Text>
          </TouchableOpacity>
          <Text style={styles.shopTextStyle}>{variables.shopText}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

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
