import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './Exstylesheet';

const Tuesday = ({navigation}) => {
  return(
    <View style = {styles.container}>
      <Text style= {styles.text}>Tuesday Exercise</Text>
      <TouchableOpacity onPress= {()=> navigation.navigate('Burpees')} style={styles.button1}>
      <Text style = {styles.buttontext}>Burpees</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5}>
      <Text style = {styles.buttontext}>15</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('Jogging')} style={styles.button2}>
      <Text style = {styles.buttontext}>Jogging in place</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button6}>
      <Text style = {styles.buttontext}>30</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('ArmCircles')} style={styles.button3}>
      <Text style = {styles.buttontext}>Arm circles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button7}>
      <Text style = {styles.buttontext}>15</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('JumpingLunges')} style={styles.button4}>
      <Text style = {styles.buttontext}>Jumping Lunges</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.button8}>
      <Text style = {styles.buttontext}>20</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Tuesday;

