import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />

const MountainClimbers = () => {
    return (
        <View style={styles.container2}>
      <Text> Start in a pushup position with the right leg extended backward and the left leg near the chest with the toes on the ground. </Text>
      <Seperator/>
      <Text>Keeping the hands on the ground and hips level, quickly switch the positions of the legs. </Text>
      <Seperator/>
      <Text>Continue to alternate the legs.</Text>
      <Seperator/>
      <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Benefits_of_Sit_Ups_and_How_to_Do_Them_Suspended_Mountain_Climbers-1.gif?w=1845'}}
      />
        </View>
    );
}

export default MountainClimbers;