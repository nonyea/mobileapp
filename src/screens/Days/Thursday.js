import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './Exstylesheet';

const Thursday = ({navigation}) => {
  return(
    <View style = {styles.container}>
      <Text style= {styles.text}>Thursday Exercise</Text>
      <TouchableOpacity onPress= {()=> navigation.navigate('BearCrawl')} style={styles.button1}>
      <Text style = {styles.buttontext}>Bear Crawl</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5}>
      <Text style = {styles.buttontext}>15</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('SquatJump')} style={styles.button2}>
      <Text style = {styles.buttontext}>Squat Jumps</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button6}>
      <Text style = {styles.buttontext}>20</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('Burpees')} style={styles.button3}>
      <Text style = {styles.buttontext}>Burpees</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button7}>
      <Text style = {styles.buttontext}>15</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {()=> navigation.navigate('JumpingLunges')} style={styles.button4}>
      <Text style = {styles.buttontext}>Jumping Lunges</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.button8}>
      <Text style = {styles.buttontext}>30</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Thursday;

