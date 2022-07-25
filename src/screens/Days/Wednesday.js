import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './Exstylesheet';

const Wednesday = ({navigation}) => {
  return(
    <View style = {styles.container}>
      <Text style= {styles.text}>Wednesday Exercise</Text>
      <TouchableOpacity onPress= {()=> navigation.navigate('TrunkRotation')} style={styles.button1}>
      <Text style = {styles.buttontext}>Trunk rotation</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('MountainClimbers')} style={styles.button2}>
      <Text style = {styles.buttontext}>Mountain Climbers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('Inchworms')} style={styles.button3}>
      <Text style = {styles.buttontext}>Inchworms</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('LateralShuffles')} style={styles.button4}>
      <Text style = {styles.buttontext}>Lateral Shuffles</Text>
      </TouchableOpacity> 
    </View>
  )
}

export default Wednesday;

