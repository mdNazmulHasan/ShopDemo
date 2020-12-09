import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import cart from '../../assets/carts.png';
import variables from '../utils/variables';

const Loading = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(variables.loginScreen);
    }, 3000);
  }, [props.navigation]);
  return (
    <View style={styles.containerStyle}>
      <Image source={cart} style={styles.image} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#667EEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
