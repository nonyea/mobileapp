

import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Screens
import Main2 from './Main2';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Main = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Main2"
        options={{headerShown: false}}
        component={Main2}
      />
    </Stack.Navigator>
  );
};


export default Main;


/*
import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


// Screens
import Main1 from './Main1';
import Login from './screens/Login';


//Screen names

const LogName = "Login";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Main1"
        component={Main1}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    
      <Tab.Navigator
        initialRouteName={LogName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === LogName) {
              iconName = focused ? 'home' : 'home';
            }
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>


        <Tab.Screen name={LogName} component={StackNavigator} />

      </Tab.Navigator>
    
  );
}

export default Main;



*/