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
import Quiz from './screens/screens2/Quiz';

//Screen names
const homeName = "Home";
const exerciseName = "Exercise";
const sleepName = "Alarm";
const deviceMName = "Questionnaire";
const gameName = "Sudoku";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'GameScreen'} screenOptions={{headerShown: false}} headerMode="none">
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen
        name="sudoku"
        component={sudoku}
      />
    </Stack.Navigator>
  );
};

const StackNavigator2 = () => {
  return (
    <Stack.Navigator initialRouteName={'DeviceMngScreen'} screenOptions={{headerShown: false}} headerMode="none">
      <Stack.Screen name="DeviceMngScreen" component={DeviceMngScreen} />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
      />
    </Stack.Navigator>
  );
};


const Tab = createBottomTabNavigator();
const Main = ({route, navigation}) => {
  const {userName} = route.params
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
              iconName = focused ? 'form-select' : 'form-select';
          
            } else if (rn === gameName) {
              iconName = focused ? 'gamepad-variant-outline' : 'gamepad-variant-outline';
            }


            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          
        })
      }
        tabBarOptions={{
          activeTintColor: '#0293d6',
          inactiveTintColor: '#485459',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 60}
        
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} initialParams={{userName: userName}} options={{headerShown: false}} />
        <Tab.Screen name={exerciseName} component={ExerciseScreen} options={{headerShown: true}}/>
        <Tab.Screen name={sleepName} component={SleepScreen} options={{headerShown: true}}/>
        <Tab.Screen name={deviceMName} component={StackNavigator2} options={{headerShown: true}}/>
        <Tab.Screen name={gameName} component={StackNavigator} options={{headerShown: true}}/>

      </Tab.Navigator>
    
  );
}

export default Main;
