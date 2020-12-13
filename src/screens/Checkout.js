import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {leftArrowIcon} from '../../assets';
import {Header} from '../component';
import {colors, variables} from '../utils';
import {useSelector, useDispatch} from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from '../store/actions/carts';

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
  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
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
        <TouchableOpacity onPress={() => handleRemove(item)}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderEmptyContainer = () => (
    <Text style={styles.emptyMessageStyle}>Your Cart is Empty</Text>
  );
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
              ListEmptyComponent={renderEmptyContainer}
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
  sectionTitleText: {fontSize: 20, marginTop: 40, marginBottom: 14},
  featuredImageStyle: {width: 110, height: 140, borderRadius: 5},
  priceTextStyle: {color: colors.governorBay},
  counterTextStyle: {fontSize: 15, padding: 10},
  emptyMessageStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
  },
});
