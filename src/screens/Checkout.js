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
import {Button, Header} from '../component';
import {colors, variables} from '../utils';
import {useSelector, useDispatch} from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from '../store/actions/carts';
import CountDown from 'react-native-countdown-component';

const Checkout = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.carts.carts);
  const subtotalPrice = useSelector((state) => state.carts.subtotalPrice);
  const totalPrice = useSelector((state) => state.carts.totalPrice);

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

  const handleHomeBtnPress = () => {
    props.navigation.navigate(variables.dashboardScreen);
  };

  const renderCartItems = ({item}) => {
    return (
      <View style={styles.cartItemContainer}>
        <Image source={{uri: item.picUrl}} style={styles.imageStyle} />
        <View style={styles.cartItemMiddleContainer}>
          <Text>{item.productName}</Text>
          <Text style={styles.greyText}>{item.brand}</Text>
          <Text style={styles.priceTextStyle}>${item.price}</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity onPress={() => handleDecrement(item)}>
              <Text style={styles.counterTextStyle}>{variables.minus}</Text>
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity onPress={() => handleIncrement(item)}>
              <Text style={styles.counterTextStyle}>{variables.plus}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => handleRemove(item)}>
          <Text>{variables.cancel}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyContainer = () => (
    <Text style={styles.emptyMessageStyle}>{variables.emptyText}</Text>
  );
  return (
    <>
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.innerContainerStyle}>
          <Header icon={leftArrowIcon} onPress={handleHeaderIconPress} />
          <CountDown
            until={20}
            size={30}
            onFinish={() =>
              props.navigation.navigate(variables.dashboardScreen)
            }
            digitStyle={styles.digitStyle}
            digitTxtStyle={styles.digitTxtStyle}
            timeToShow={['S']}
            timeLabels={{m: 'MM', s: 'Seconds'}}
          />
          <Text style={styles.sectionTitleText}>
            {variables.checkoutScreen}
          </Text>
          <View style={styles.listContainerStyle}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={cartState}
              renderItem={renderCartItems}
              keyExtractor={(item, index) => `featured_${item.id}`}
              ListEmptyComponent={renderEmptyContainer}
            />
          </View>
          <Text style={{color: colors.tundora}}>{variables.address}</Text>
          <View style={styles.verticalSeparator} />
          <View style={styles.calculationTextContainer}>
            <Text style={styles.greyText}>{variables.subtotal}</Text>
            <Text>${subtotalPrice}</Text>
          </View>
          <View style={styles.calculationTextContainer}>
            <Text style={styles.greyText}>{variables.discount}</Text>
            <Text>5%</Text>
          </View>
          <View style={styles.calculationTextContainer}>
            <Text style={styles.greyText}>{variables.shipping}</Text>
            <Text>$10.00</Text>
          </View>
          <View style={styles.verticalSeparator} />
          <View style={styles.calculationTextContainer}>
            <Text>{variables.total}</Text>
            <Text>${totalPrice}</Text>
          </View>
        </View>
        <Button label={variables.backToHome} onPress={handleHomeBtnPress} />
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
    margin: 5,
    justifyContent: 'space-between',
  },
  containerStyle: {flex: 1},
  innerContainerStyle: {flex: 1, paddingHorizontal: 25},
  sectionTitleText: {fontSize: 20, marginBottom: 14},
  imageStyle: {width: 90, height: 120, borderRadius: 5},
  priceTextStyle: {color: colors.governorBay},
  counterTextStyle: {fontSize: 15, padding: 10},
  emptyMessageStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
  },
  greyText: {color: colors.grey},
  cartItemMiddleContainer: {marginLeft: 19, justifyContent: 'space-between'},
  counterContainer: {
    backgroundColor: colors.wildSand,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    width: 114,
  },
  digitStyle: {backgroundColor: colors.white},
  digitTxtStyle: {color: colors.cornFlowerBlue},
  listContainerStyle: {flex: 1},
  verticalSeparator: {
    height: 1,
    backgroundColor: colors.dustyGrey,
    marginVertical: 13,
  },
  calculationTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
