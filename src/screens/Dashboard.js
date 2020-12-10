import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Platform,
} from 'react-native';
import {menu} from '../../assets';
import {Header} from '../component';
import category from '../mockData/category';
import {variables} from '../utils';

const Dashboard = () => {
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
  sectionTitleText: {fontSize: 20, marginTop: 58},
});
