

import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


// Screens
import Main1 from './Main1';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

const Main2 = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In" component={Login} />
      <Stack.Screen
      options={{
        headerShown: false
      }}
        name="Main1"
        component={Main1}
      />
    </Stack.Navigator>
  );
};


export default Main2;
