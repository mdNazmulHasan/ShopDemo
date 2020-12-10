import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {menu} from '../../assets';
import {Header} from '../component';

const Dashboard = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, paddingLeft: 25}}>
          <Header icon={menu} />
          <Text style={{fontSize: 20, marginTop: 58}}>Categories</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
