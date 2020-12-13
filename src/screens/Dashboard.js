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
import {menu} from '../../assets';
import {Header} from '../component';
import category from '../mockData/category';
import featuredProducts from '../mockData/featuredProducts';
import {variables} from '../utils';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../store/actions/carts';

const Dashboard = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.carts.carts);
  const handleProductSelect = async (item) => {
    await dispatch(addToCart(item));
  };
  const renderCategoryItem = ({item}) => {
    return (
      <View style={styles.categoryItemContainer}>
        <ImageBackground
          source={{uri: item.picUrl}}
          imageStyle={styles.categoryItemImageStyle}
          blurRadius={4}
          style={styles.categoryItemBackgroundImageContainerStyle}>
          <Text style={styles.categoryItemNameText}>{item.categoryName}</Text>
        </ImageBackground>
      </View>
    );
  };
  const renderFeaturedProducts = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleProductSelect(item)}>
        <View style={styles.categoryItemContainer}>
          <Image
            source={{uri: item.picUrl}}
            style={styles.featuredImageStyle}
          />
          <Text style={styles.priceTextStyle}>{item.price}</Text>
          <Text>{item.productName}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.innerContainerStyle}>
          <Header icon={menu} />
          <Text style={styles.sectionTitleText}>{variables.categories}</Text>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={category}
              horizontal={true}
              renderItem={renderCategoryItem}
              keyExtractor={(item, index) => `category_${item.id}`}
            />
          </View>
          <Text style={styles.sectionTitleText}>{variables.featured}</Text>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={featuredProducts}
              horizontal={true}
              renderItem={renderFeaturedProducts}
              keyExtractor={(item, index) => `featured_${item.id}`}
            />
          </View>
          <Text style={styles.sectionTitleText}>{variables.bestSell}</Text>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={featuredProducts}
              horizontal={true}
              renderItem={renderFeaturedProducts}
              keyExtractor={(item, index) => `featured_${item.id}`}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  categoryItemContainer: {padding: 10},
  categoryItemImageStyle: {borderRadius: 5},
  categoryItemBackgroundImageContainerStyle: {
    height: 65,
    width: 114,
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
  innerContainerStyle: {flex: 1, paddingLeft: 25},
  sectionTitleText: {fontSize: 20, marginTop: 58, marginBottom: 14},
  featuredImageStyle: {width: 110, height: 140, borderRadius: 5},
  priceTextStyle: {marginVertical: 12},
});
