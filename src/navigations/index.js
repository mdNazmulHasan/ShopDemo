import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Loading from '../screens/Loading';
import Home from '../screens/Home';
const Stack = createStackNavigator();
const headerOption = {
  gestureEnabled: false,
  headerShown: false,
};

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={Loading} options={headerOption} />
      <Stack.Screen name="Home" component={Home} options={headerOption} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
