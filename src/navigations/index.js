import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Loading from '../screens/Loading';
import Home from '../screens/Home';
import Login from '../screens/Login';
import {variables} from '../utils';
import Verify from '../screens/Verify';
const Stack = createStackNavigator();
const headerOption = {
  gestureEnabled: false,
  headerShown: false,
};

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={variables.loadingScreen}
        component={Loading}
        options={headerOption}
      />
      <Stack.Screen
        name={variables.homeScreen}
        component={Home}
        options={headerOption}
      />
      <Stack.Screen
        name={variables.loginScreen}
        component={Login}
        options={headerOption}
      />
      <Stack.Screen
        name={variables.verifyScreen}
        component={Verify}
        options={headerOption}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
