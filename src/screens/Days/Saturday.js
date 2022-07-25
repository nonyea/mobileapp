import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './Exstylesheet';

const Saturday = ({navigation}) => {
  return(
    <View style = {styles.container}>
      <Text style= {styles.text}>Saturday Exercise</Text>
      <TouchableOpacity onPress= {()=> navigation.navigate('LateralShuffles')} style={styles.button1}>
      <Text style = {styles.buttontext}>Lateral Shuffles</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('SquatJump')} style={styles.button2}>
      <Text style = {styles.buttontext}>Squat Jumps</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('MountainClimbers')} style={styles.button3}>
      <Text style = {styles.buttontext}>Mountain Climbers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('Jogging')} style={styles.button4}>
      <Text style = {styles.buttontext}>Jogging in place</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Saturday;

