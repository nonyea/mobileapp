import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


// Screens
import HomeScreen from './screens/HomeScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import SleepScreen from './screens/SleepScreen';
import DeviceMngScreen from './screens/DeviceMngScreen';
import GameScreen from './screens/GameScreen';
import sudoku from './screens/screens2/sudoku';

//Screen names
const homeName = "Home";
const exerciseName = "Exercise";
const sleepName = "Sleep";
const deviceMName = "Device Management";
const gameName = "Game";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'GameScreen'} headerMode="none">
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen
        name="sudoku"
        component={sudoku}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home';

            } else if (rn === exerciseName) {
              iconName = focused ? 'dumbbell' : 'dumbbell';

            } else if (rn === sleepName) {
              iconName = focused ? 'sleep' : 'sleep';

            } else if (rn === deviceMName) {
              iconName = focused ? 'cellphone-off' : 'cellphone-off';
          
            } else if (rn === gameName) {
              iconName = focused ? 'gamepad-variant-outline' : 'gamepad-variant-outline';
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

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={exerciseName} component={ExerciseScreen} />
        <Tab.Screen name={sleepName} component={SleepScreen} />
        <Tab.Screen name={deviceMName} component={DeviceMngScreen} />
        <Tab.Screen name={gameName} component={StackNavigator} />

      </Tab.Navigator>
    
  );
}

export default Main;
