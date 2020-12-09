import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {cartsImage} from '../../assets';
import {variables, colors} from '../utils';

const Loading = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(variables.homeScreen);
    }, 3000);
  }, [props.navigation]);
  return (
    <View style={styles.containerStyle}>
      <Image source={cartsImage} style={styles.image} />
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
    backgroundColor: colors.cornFlowerBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
