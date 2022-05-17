import * as React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Monday from './Days/Monday'
import Tuesday from './Days/Tuesday'
import Wednesday from './Days/Wednesday'
import Thursday from './Days/Thursday'
import Friday from './Days/Friday'
import Saturday from './Days/Saturday'
import Sunday from './Days/Sunday'




/*export default function ExerciseScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Details Screen</Text>
        </View>
    );
}

*/


//Screen names
const Mon = "Mon";
const Tue = "Tue";
const Wed = "Wed";
const Thu = "Thu";
const Fri = "Fri";
const Sat = "Sat";
const Sun = "Sun";


const Tab = createMaterialTopTabNavigator();
const ExerciseScreen = () => {
  return (
    
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={Mon} component={Monday} />
        <Tab.Screen name={Tue} component={Tuesday} />
        <Tab.Screen name={Wed} component={Wednesday} />
        <Tab.Screen name={Thu} component={Thursday} />
        <Tab.Screen name={Fri} component={Friday} />
        <Tab.Screen name={Sat} component={Saturday} />
        <Tab.Screen name={Sun} component={Sunday} />

      </Tab.Navigator>
    
  );
}

export default ExerciseScreen;