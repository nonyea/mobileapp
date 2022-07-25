

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// Screens
import Monday from './Days/Monday';
import Tuesday from './Days/Tuesday';
import Wednesday from './Days/Wednesday';
import Thursday from './Days/Thursday';
import Friday from './Days/Friday';
import Saturday from './Days/Saturday';
import Sunday from './Days/Sunday';

import JumpingJacks from './Days/Exercises/JumpingJacks';
import SquatJump from './Days/Exercises/SquatJump';
import SingleKick from './Days/Exercises/SingleKick';
import MountainClimbers from './Days/Exercises/MountainClimbers';
import JumpingLunges from './Days/Exercises/JumpingLunges';
import LateralShuffles from './Days/Exercises/LateralShuffles';
import ArmCircles from './Days/Exercises/ArmCircles';
import TrunkRotation from './Days/Exercises/TrunkRotation';
import Jogging from './Days/Exercises/Jogging';
import Burpees from './Days/Exercises/Burpees';
import Inchworms from './Days/Exercises/Inchworms';
import BearCrawl from './Days/Exercises/BearCrawl';


const Mon = "Mon";
const Tue = "Tue";
const Wed = "Wed";
const Thu = "Thu";
const Fri = "Fri";
const Sat = "Sat";
const Sun = "Sun";



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Monday" component={Monday} options={{ headerShown: false }} />
      <Stack.Screen name="JumpingJacks" options={{headerShown: true}} component={JumpingJacks} />
      <Stack.Screen name="SquatJump" options={{headerShown: true}} component={SquatJump}/>
      <Stack.Screen name="SingleKick" options={{headerShown: true}} component={SingleKick}/>
      <Stack.Screen name="MountainClimbers" options={{headerShown: true}} component={MountainClimbers}/>
    </Stack.Navigator>

  )
}  

const StackNavigator2 = () => {
  return(
    <Stack.Navigator> 
      <Stack.Screen name="Tuesday" component={Tuesday} options={{ headerShown: false }} />
      <Stack.Screen name="JumpingLunges" options={{headerShown: true}} component={JumpingLunges}/>
      <Stack.Screen name="Burpees" options={{headerShown: true}} component={Burpees}/>
      <Stack.Screen name="Jogging" options={{headerShown: true}} component={Jogging}/>
      <Stack.Screen name="ArmCircles" options={{headerShown: true}} component={ArmCircles}/>
    </Stack.Navigator>
  )
}


const StackNavigator3 = () => {
  return(
    <Stack.Navigator> 
      <Stack.Screen name="Wednesday" component={Wednesday} options={{ headerShown: false }} />
      <Stack.Screen name="TrunkRotation" options={{headerShown: true}} component={TrunkRotation}/>
      <Stack.Screen name="MountainClimbers" options={{headerShown: true}} component={MountainClimbers}/>
      <Stack.Screen name="Inchworms" options={{headerShown: true}} component={Inchworms}/>
      <Stack.Screen name="LateralShuffles" options={{headerShown: true}} component={LateralShuffles}/>
    </Stack.Navigator>
  )
}

const StackNavigator4 = () => {
  return(
    <Stack.Navigator> 
      <Stack.Screen name="Thursday" component={Thursday} options={{ headerShown: false }} />
      <Stack.Screen name="JumpingLunges" options={{headerShown: true}} component={JumpingLunges}/>
      <Stack.Screen name="Burpees" options={{headerShown: true}} component={Burpees}/>
      <Stack.Screen name="BearCrawl" options={{headerShown: true}} component={BearCrawl}/>
      <Stack.Screen name="SquatJump" options={{headerShown: true}} component={SquatJump}/>
    </Stack.Navigator>
  )
}

const StackNavigator5 = () => {
  return(
    <Stack.Navigator> 
      <Stack.Screen name="Friday" component={Friday} options={{ headerShown: false }} />
      <Stack.Screen name="ArmCircles" options={{headerShown: true}} component={ArmCircles}/>
      <Stack.Screen name="JumpingJacks" options={{headerShown: true}} component={JumpingJacks} />
      <Stack.Screen name="SingleKick" options={{headerShown: true}} component={SingleKick}/>
      <Stack.Screen name="TrunkRotation" options={{headerShown: true}} component={TrunkRotation}/>
    </Stack.Navigator>
  )
}

const StackNavigator6 = () => {
  return(
    <Stack.Navigator> 
      <Stack.Screen name="Saturday" component={Saturday} options={{ headerShown: false }} />
      <Stack.Screen name="SquatJump" options={{headerShown: true}} component={SquatJump}/>
      <Stack.Screen name="MountainClimbers" options={{headerShown: true}} component={MountainClimbers}/>
      <Stack.Screen name="Jogging" options={{headerShown: true}} component={Jogging}/>
      <Stack.Screen name="LateralShuffles" options={{headerShown: true}} component={LateralShuffles}/>
    </Stack.Navigator>
  )
}

const StackNavigator7 = () => {
  return(
    <Stack.Navigator> 
      <Stack.Screen name="Sunday" component={Sunday} options={{ headerShown: false }} />
      <Stack.Screen name="SingleKick" options={{headerShown: true}} component={SingleKick}/>
      <Stack.Screen name="Inchworms" options={{headerShown: true}} component={Inchworms}/>
      <Stack.Screen name="Burpees" options={{headerShown: true}} component={Burpees}/>
      <Stack.Screen name="BearCrawl" options={{headerShown: true}} component={BearCrawl}/>
    </Stack.Navigator>
  )
}

const Tab = createMaterialTopTabNavigator();
const ExerciseScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 60}
      }}>

      <Tab.Screen name={Mon} component={StackNavigator} />
      <Tab.Screen name={Tue} component={StackNavigator2} />
      <Tab.Screen name={Wed} component={StackNavigator3} />
      <Tab.Screen name={Thu} component={StackNavigator4} />
      <Tab.Screen name={Fri} component={StackNavigator5} />
      <Tab.Screen name={Sat} component={StackNavigator6} />
      <Tab.Screen name={Sun} component={StackNavigator7} />

    </Tab.Navigator>

  );
}




export default ExerciseScreen;


