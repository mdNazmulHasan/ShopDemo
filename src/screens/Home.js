import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {variables} from '../utils';
import {shopImage} from '../../assets';
import {Button} from '../component';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = (props) => {
  const handleLoginWithPhone = () => {
    props.navigation.navigate(variables.loginScreen);
  };
  const handleShopBtnPress = () => {
    props.navigation.navigate(variables.dashboardScreen);
  };
  return (
    <>
      <SafeAreaView style={styles.containerStyle}>
        <Text style={styles.welcomeTextStyle}>{variables.welcomeText}</Text>
        <Image source={shopImage} style={styles.brandImageStyle} />
        <View>
          <Button
            label={variables.loginBtnText}
            onPress={handleLoginWithPhone}
          />
          <TouchableOpacity onPress={handleShopBtnPress}>
            <Text style={styles.shopTextStyle}>{variables.shopText}</Text>
          </TouchableOpacity>
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
  shopTextStyle: {alignSelf: 'center', padding: 20, fontSize: 18},
});
