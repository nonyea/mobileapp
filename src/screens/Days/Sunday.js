import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './Exstylesheet';

const Sunday = ({navigation}) => {
  return(
    <View style = {styles.container}>
      <Text style= {styles.text}>Sunday Exercise</Text>
      <TouchableOpacity onPress= {()=> navigation.navigate('Burpees')} style={styles.button1}>
      <Text style = {styles.buttontext}>Burpees</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('Inchworms')} style={styles.button2}>
      <Text style = {styles.buttontext}>Inchworms</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('SingleKick')} style={styles.button3}>
      <Text style = {styles.buttontext}>Single Leg Stand</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('BearCrawl')} style={styles.button4}>
      <Text style = {styles.buttontext}>Bear Crawl</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Sunday;

