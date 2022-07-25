import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './Exstylesheet';

const Friday = ({navigation}) => {
  return(
    <View style = {styles.container}>
      <Text style= {styles.text}>Friday Exercise</Text>
      <TouchableOpacity onPress= {()=> navigation.navigate('ArmCircles')} style={styles.button1}>
      <Text style = {styles.buttontext}>Arm circles</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('JumpingJacks')} style={styles.button2}>
      <Text style = {styles.buttontext}>Jumping Jacks</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('SingleKick')} style={styles.button3}>
      <Text style = {styles.buttontext}>Single Leg Stand</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('TrunkRotation')} style={styles.button4}>
      <Text style = {styles.buttontext}>Trunk Rotation</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Friday;

