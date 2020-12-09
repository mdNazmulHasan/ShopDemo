import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import cart from '../../assets/carts.png';

const LoadingScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <Image source={cart} style={styles.image} />
    </View>
  );
};

export default LoadingScreen;

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
