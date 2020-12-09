import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from '../screens/LoadingScreen';
const Stack = createStackNavigator();
const headerOption = {
  gestureEnabled: false,
  headerShown: false,
};

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={headerOption}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
