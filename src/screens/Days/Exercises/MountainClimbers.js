import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />

const MountainClimbers = () => {
    return (
        <View style={styles.container2}>
      <Text>Beginning in a pushup position extend the right leg backwards, and the left leg close to the chest with the toes on the floor.</Text>
      <Seperator/>
      <Text>Change the position of your legs swiftly while keeping your hands on the floor.</Text>
      <Seperator/>
      <Text>Continue to alternate your legs.</Text>
      <Seperator/>
      <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Benefits_of_Sit_Ups_and_How_to_Do_Them_Suspended_Mountain_Climbers-1.gif?w=1845'}}
      />
        </View>
    );
}

export default MountainClimbers;