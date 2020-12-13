import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {leftArrowIcon, menu} from '../../assets';
import {Header} from '../component';
import category from '../mockData/category';
import featuredProducts from '../mockData/featuredProducts';
import {colors, variables} from '../utils';
import {useSelector, useDispatch} from 'react-redux';
import {decreaseQuantity, increaseQuantity} from '../store/actions/carts';

const Checkout = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.carts.carts);

  const handleHeaderIconPress = () => {
    props.navigation.goBack();
  };
  const handleIncrement = (item) => {
    dispatch(increaseQuantity(item.id));
  };
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
    }
  };

  const renderFeaturedProducts = ({item}) => {
    return (
      <View style={styles.cartItemContainer}>
        <Image source={{uri: item.picUrl}} style={styles.featuredImageStyle} />
        <View style={{marginLeft: 19, justifyContent: 'space-between'}}>
          <Text>{item.productName}</Text>
          <Text style={{color: colors.grey}}>{item.brand}</Text>
          <Text style={styles.priceTextStyle}>{item.price}</Text>
          <View
            style={{
              backgroundColor: colors.wildSand,
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
              width: 114,
            }}>
            <TouchableOpacity onPress={() => handleDecrement(item)}>
              <Text style={styles.counterTextStyle}>-</Text>
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity onPress={() => handleIncrement(item)}>
              <Text style={styles.counterTextStyle}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.innerContainerStyle}>
          <Header icon={leftArrowIcon} onPress={handleHeaderIconPress} />
          <Text style={styles.sectionTitleText}>
            {variables.checkoutScreen}
          </Text>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={cartState}
              renderItem={renderFeaturedProducts}
              keyExtractor={(item, index) => `featured_${item.id}`}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  cartItemContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: colors.white,
    margin: 10,
    justifyContent: 'space-between',
  },
  categoryItemImageStyle: {borderRadius: 5},
  categoryItemBackgroundImageContainerStyle: {
    height: 104,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  categoryItemNameText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
  containerStyle: {flex: 1},
  innerContainerStyle: {flex: 1, paddingHorizontal: 25},
  sectionTitleText: {fontSize: 20, marginTop: 58, marginBottom: 14},
  featuredImageStyle: {width: 110, height: 140, borderRadius: 5},
  priceTextStyle: {color: colors.governorBay},
  counterTextStyle: {fontSize: 15, padding: 10},
});
