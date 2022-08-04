import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Exstylesheet'


const Seperator = () => <View style = {styles.seperator} />
const ArmCircles = () => {
    return (
        <View style={styles.container2}>
      <Text>Arm circles can be done while standing or sitting</Text>
      <Seperator/>
      <Text>Your arms should be rotated in a circle in both a clockwise and counterclockwise direction.</Text>
      <Seperator/>
      <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_The_Benefits_of_Dynamic_Stretching_and_How_to_Get_Started_Large_Arm_Circles.gif?w=1845'}}
      />
      <Text> Video source: medicalnewstoday.com</Text>
        </View>
    );
}

export default ArmCircles;