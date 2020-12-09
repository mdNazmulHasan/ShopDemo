import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({icon, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Image source={icon} style={styles.image} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
