import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import shop from '../../assets/shop.webp';
import colors from '../utils/colors';

const Login = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            marginVertical: 20,
          }}>
          Welcome to Bolt
        </Text>
        <Image
          source={shop}
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.cornFlowerBlue,
              alignSelf: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 6,
            }}>
            <Text style={{fontSize: 15, color: colors.white}}>
              Login with phone
            </Text>
          </TouchableOpacity>
          <Text style={{alignSelf: 'center', padding: 20, fontSize: 18}}>
            Shop with us
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
