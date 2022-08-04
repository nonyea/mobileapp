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
      <TouchableOpacity style={styles.button5}>
      <Text style = {styles.buttontext}>20</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('SquatJump')} style={styles.button2}>
      <Text style = {styles.buttontext}>Squat Jumps</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button6}>
      <Text style = {styles.buttontext}>15</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('MountainClimbers')} style={styles.button3}>
      <Text style = {styles.buttontext}>Mountain Climbers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button7}>
      <Text style = {styles.buttontext}>15</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('Jogging')} style={styles.button4}>
      <Text style = {styles.buttontext}>Jogging in place</Text>
      </TouchableOpacity>      
      <TouchableOpacity style={styles.button8}>
      <Text style = {styles.buttontext}>30</Text>
      </TouchableOpacity>


    </View>
  )
}

export default Saturday;

