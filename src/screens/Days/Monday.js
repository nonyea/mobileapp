import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './Exstylesheet';
//import { FlatList } from 'react-native-gesture-handler';
//import {useState} from 'react'
//import { Colors } from 'react-native/Libraries/NewAppScreen';
//import { colors } from 'react-native-elements';
//import { color } from 'react-native-reanimated';

const Monday = ({navigation}) => {
  return(
    <View style = {styles.container}>
      <Text style= {styles.text}>Monday Exercise</Text>
      <TouchableOpacity onPress= {()=> navigation.navigate('JumpingJacks')} style={styles.button1}>
      <Text style = {styles.buttontext}>Jumping Jacks</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('SquatJump')} style={styles.button2}>
      <Text style = {styles.buttontext}>Squat Jumps</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('SingleKick')} style={styles.button3}>
      <Text style = {styles.buttontext}>Single Leg Stand</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('MountainClimbers')} style={styles.button4}>
      <Text style = {styles.buttontext}>Mountain Climbers</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Monday;

/*export default function Monday() {

  const [monex, setMon] = useState([
    {name: 'Jumping Jacks', key: '1'},
    {name: 'Squat Jumps', key: '2'},
    {name: 'Single Leg Stand', key: '3'},
    {name: 'Mountain Climbers', key: '4'},
    {name: 'Jumping Lunges', key: '5'},

  ]);

  return(
    <View style={styles.container}>
        <FlatList
            data={monex}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.name}</Text>
            )}
        />

    </View>
  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19719a',
    paddingTop: 40 ,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 20,
    padding: 25,
    backgroundColor: '#fff',
    fontSize: 20
  },

  
})
*/

