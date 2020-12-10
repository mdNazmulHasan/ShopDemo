import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {variables} from '../utils';
import {Loading, Login, Home, Verify, Dashboard} from '../screens';
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
      <Stack.Screen
        name={variables.dashboardScreen}
        component={Dashboard}
        options={headerOption}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
